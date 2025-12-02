import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "jupiter-launchpad",
  name: "Jupiter Launchpad",
  description: "Ultimate decentralised distribution stack",
  links: {
    website: "https://lfg.jup.ag/",
    twitter: "https://twitter.com/JupiterExchange",
  },
  tags: ["tool"],
};

const lfgContract = {
  name: "LFG",
  address: "DiSLRwcSFvtwvMWSs7ubBMvYRaYNYupa76ZSuYLe6D7j",
};

const lfgService: ServiceRaw = {
  id: `${platform.id}-lfg`,
  name: "LFG",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [lfgContract],
};

export const services: ServiceRaw[] = [lfgService];
export default services;
