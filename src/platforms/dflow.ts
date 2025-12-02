import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "dflow",
  name: "DFlow",
  description: "Low-latency Solana DEX aggregator",
  links: {
    website: "https://dflow.net/",
    discord: "https://discord.gg/dflow",
    twitter: "https://x.com/dflowprotocol",
  },
  tags: ["dapp", "bridge"],
};

export const contract = {
  name: "Aggregator",
  address: "DF1ow4tspfHX9JwWJsAb9epbkA8hmpSEAtxXy1V27QBH",
};

const service: ServiceRaw = {
  id: `${platform.id}-aggregator`,
  name: "Aggregator",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
