import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "pumpkin",
  name: "Pumpkin",
  description: "Token Launch Hub",
  tags: ["dapp"],
  links: {
    website: "https://app.pumpkin.fun/",
    telegram: "https://t.me/pumpkindotfun",
    documentation: "https://pumpkindotfun.gitbook.io/",
    twitter: "https://x.com/pumpkindotfun",
  },
};

const contract = {
  name: "Staking",
  address: "ARFxpgenuFNbyoysFdqEwTgEdxtLtHbTHwCWHJjqWHTb",
};

const service: ServiceRaw = {
  id: "pumpkin-staking",
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
