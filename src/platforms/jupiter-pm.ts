import { NetworkId } from "@sonarwatch/portfolio-core";
import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "jupiter-pm",
  name: "Jupiter Predict",
  description: "Jupiter Prediction Market, trade on real-world events.",
  links: {
    website: "https://jup.ag/prediction",
    discord: "https://discord.gg/jup",
    twitter: "https://twitter.com/JupiterExchange",
    github: "https://github.com/jup-ag",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Prediction Market",
  address: "3ZZuTbwC6aJbvteyVxXUS7gtFYdf7AuXeitx6VyvjvUp",
};

const service: ServiceRaw = {
  id: `${platform.id}-prediction-market`,
  name: "Prediction Market",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
