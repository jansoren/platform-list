import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "elemental",
  name: "Elemental",
  description:
    "Solana-based crypto fund dedicated to making DeFi investing simple",
  links: {
    website: "https://elemental.fund/",
    telegram: "https://tg.elemental.fund",
    twitter: "https://twitter.com/elementaldefi",
    github: "https://github.com/elementalfund",
    documentation: "https://docs.elemental.fund/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Elemental",
  address: "ELE5vYY81W7UCpTPs7SyD6Bwm5FwZBntTW8PiGqM5d4A",
};

const service: ServiceRaw = {
  id: "elemental",
  name: "Elemental",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
