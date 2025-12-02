import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "zelo",
  name: "Zelo Finance",
  description: "Solana's Lossless Lottery Savings Protocol ",
  links: {
    website: "https://www.zelofi.io/",
    discord: "https://discord.gg/blocksmithlabs",
    twitter: "https://x.com/zelofinance",
    github: "https://github.com/Blocksmith-Labs",
    documentation: "https://blocksmithlabs-1.gitbook.io/zelo-docs",
  },
  tags: ["dapp", "gaming"],
};

const stakingContract = {
  name: "Staking",
  address: "3weDTR2PBop8SoYXpQEhdRCA9Wr2JK7gj3CxuUbMo2VJ",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
export default services;
