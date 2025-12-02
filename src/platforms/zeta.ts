import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "zeta",
  name: "Zeta",
  description: "Zeta Markets is the premier derivatives protocol on Solana.",
  defiLlamaId: "zeta",
  links: {
    website: "https://www.zeta.markets/",
    discord: "https://discord.gg/Xn9HCJaDZd",
    telegram: "https://t.me/realzetamarkets",
    twitter: "https://x.com/ZetaMarkets",
    github: "https://github.com/zetamarkets",
    documentation: "https://docs.zeta.markets/",
  },
  tokens: ["ZEXy1pqteRu3n13kdyh4LwPQknkFk3GzmMYMuNadWPo"],
  tags: ["dapp"],
};

const mainContract = {
  name: "Markets",
  address: "ZETAxsqBRek56DhiGXrn75yj2NHU3aYUnxvHXpkf3aD",
};

const stakingContract = {
  name: "Staking",
  address: "4DUapvWZDDCkfWJpdwvX2QjwAE9Yq4wU8792RMMv7Csg",
};

const mainService: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [mainContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [mainService, stakingService];
export default services;
