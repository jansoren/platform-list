import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "pumpfun",
  name: "Pumpfun",
  defiLlamaId: "pumpfun",
  tags: ["dapp"],
  links: {
    website: "https://pump.fun/board",
    telegram: "https://t.me/pumpfunsupport",
    twitter: "https://x.com/pumpdotfun",
  },
  tokens: ["pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn"],
};

const contract = {
  name: "Launchpad",
  address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P",
};

const service: ServiceRaw = {
  id: `${platform.id}-launchpad`,
  name: "Launchpad",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
