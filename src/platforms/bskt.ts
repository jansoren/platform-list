import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "bskt",
  name: "BSKT",
  description:
    "Baskets of assets in a portfolio, bridging liquidity cross-chain.",
  tags: ["dapp"],
  links: {
    website: "https://claim.bskt.fi/",
    discord: "https://discord.gg/VdSdWqpqQ6",
    telegram: "https://t.me/BSKT_FI",
    twitter: "https://twitter.com/bsktfi",
    documentation: "https://www.bskt.fi/bskt-whitepaper.pdf",
  },
  tokens: ["6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"],
};

const bsktStakingContract = {
  name: "BSKT Staking",
  address: "DF8vgzUDH2CGywD7Gd9jd9Y5Kwmrx97h4Viumjo4rrr6",
};

const bsktStakingService: ServiceRaw = {
  id: "bskt-staking",
  name: "BSKT Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [bsktStakingContract],
};

export const services: ServiceRaw[] = [bsktStakingService];
export default services;
