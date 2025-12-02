import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "melee",
  name: "Melee",
  description: "The only prediction market with 100x+ returns.",
  tags: ["dapp"],
  links: {
    website: "https://alpha.melee.markets/",
    telegram: "https://t.me/meleealpha",
    twitter: "https://x.com/meleemarkets",
    documentation: "https://melee-1.gitbook.io/melee-docs",
  },
};

const contract = {
  name: "Prediction",
  address: "HK4ai9cQNxF9Btu2aUXNiqGLKF88p3ep2cVEtYo7uK4m",
};

const service: ServiceRaw = {
  id: `${platform.id}-prediction`,
  name: "Prediction",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
