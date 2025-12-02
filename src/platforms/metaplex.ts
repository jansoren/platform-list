import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "metaplex",
  name: "Metaplex",
  description: "Build decentralizedapplications on Solana and the SVM",
  links: {
    website: "https://metaplex.com",
    discord: "https://discord.gg/metaplex",
    twitter: "https://x.com/metaplex",
    github: "https://github.com/metaplex-foundation",
    documentation: "https://www.metaplex.com/guides",
  },
  tokens: ["METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m"],
  tags: ["tool", "dapp"],
};

// Contracts (exported for cross-platform use)
export const metaplexContract = {
  name: "Metaplex",
  address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
};

export const bubblegumContract = {
  name: "Bubblegum",
  address: "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
};

export const services: ServiceRaw[] = [];
