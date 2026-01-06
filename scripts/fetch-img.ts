import { platforms } from "../src";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import sharp from "sharp";

/**
 * This script downloads missing platform images from Twitter/X via unavatar.io,
 * converts them to 400x400 WebP format, and performs a final validation
 * of all images in the img/ directory.
 */
const IMG_TARGET_SIZE = 400;

async function downloadAndConvertImages() {
  const imgDir = join(__dirname, "../img");
  if (!existsSync(imgDir)) {
    mkdirSync(imgDir);
  }

  const twitterPlatforms = platforms.filter((p) => p.links && p.links.twitter);

  console.log(`Processing ${twitterPlatforms.length} platforms...`);

  for (const p of twitterPlatforms) {
    const twitterUrl = p.links.twitter as string;
    const handle = twitterUrl.split("/").pop()?.replace("@", "") || "";
    const imageUrl = `https://unavatar.io/x/${handle}`;
    const outputPath = join(imgDir, `${p.id}.webp`);

    if (existsSync(outputPath)) {
      try {
        const metadata = await sharp(outputPath).metadata();
        if (
          metadata.width === IMG_TARGET_SIZE &&
          metadata.height === IMG_TARGET_SIZE
        ) {
          // console.log(`[Skip] ${p.id} (already ${IMG_TARGET_SIZE}x${IMG_TARGET_SIZE})`);
          continue;
        }
      } catch (e) {
        console.log(`[Update] ${p.id} (invalid file, re-downloading)`);
      }
    }

    try {
      const response = await fetch(imageUrl);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const buffer = await response.arrayBuffer();

      await sharp(Buffer.from(buffer))
        .resize(IMG_TARGET_SIZE, IMG_TARGET_SIZE)
        .webp()
        .toFile(outputPath);

      console.log(`[Done] ${p.id} saved to img/${p.id}.webp`);
    } catch (error) {
      console.error(
        `[Error] Failed to process ${p.id} (${handle}):`,
        error instanceof Error ? error.message : error,
      );
    }
  }

  console.log("\n--- Final Validation ---");
  const { readdirSync } = require("fs");
  const files = readdirSync(imgDir).filter((f: string) => f.endsWith(".webp"));
  let invalidCount = 0;

  for (const file of files) {
    const filePath = join(imgDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      if (
        metadata.width !== IMG_TARGET_SIZE ||
        metadata.height !== IMG_TARGET_SIZE
      ) {
        console.error(
          `[Invalid Size] ${file}: ${metadata.width}x${metadata.height}`,
        );
        invalidCount++;
      }
    } catch (e) {
      console.error(`[Invalid File] ${file}: Could not read metadata`);
      invalidCount++;
    }
  }

  if (invalidCount === 0) {
    console.log(`All ${files.length} images are valid (400x400 .webp).`);
  } else {
    console.error(`Validation failed: ${invalidCount} invalid images found.`);
  }
}

downloadAndConvertImages().then();
