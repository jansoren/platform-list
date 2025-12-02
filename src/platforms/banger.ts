import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "banger",
  name: "Banger",
  description: "Launch and trade tweetcoins.",
  tags: ["social", "dapp"],
  links: {
    website: "https://www.banger.lol/",
    twitter: "https://x.com/bangerdotlol",
    documentation: "https://banger.gitbook.io/banger-docs",
  },
};

const contract = {
  name: "Launch",
  address: "BANGURqoS7pzE8MEtQrqxHPD9qYHfYdhCA7NVWPZvCtT",
};

const service: ServiceRaw = {
  id: "banger-launch",
  name: "Launch",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
