import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "exponent",
  name: "Exponent",
  description:
    "Building Solana's DeFi yield exchange — Choose between fixed or leveraged yields.",
  defiLlamaId: "exponent",
  links: {
    website: "https://www.exponent.finance",
    telegram: "https://t.me/exponentcitizens",
    twitter: "https://x.com/exponentfinance",
    github: "https://github.com/exponent-finance",
    documentation: "https://docs.exponent.finance/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Core",
  address: "ExponentnaRg3CQbW6dqQNZKXp7gtZ9DGMp1cwC4HAS7",
};

const service: ServiceRaw = {
  id: "exponent",
  name: "Core",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
