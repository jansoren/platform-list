import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "cyberfrogs",
  name: "CyberFrogs",
  links: {
    website: "https://legacy.cyberfrogs.io/faction-contracts-v3",
    twitter: "https://twitter.com/CyberFrogsNFT",
    discord: "https://discord.com/invite/cyberfrogs",
  },
  description: "Leading NFT Development, Innovation & Crypto Trading Tools",
  tags: ["nft-collection"],
};

const autoThorContract = {
  name: "AutoThor",
  address: "8F2VM13kdMBaHtcXPHmArtLueg7rfsa3gnrgGjAy4oCu",
};

const autoThorService: ServiceRaw = {
  id: `${platform.id}-autothor`,
  name: "AutoThor",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [autoThorContract],
};

export const services: ServiceRaw[] = [autoThorService];
export default services;
