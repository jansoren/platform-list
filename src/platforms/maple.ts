import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "maple",
  name: "Maple",
  defiLlamaId: "parent#maple-finance",
  links: {
    website: "https://www.maple.finance/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Lending",
  address: "5D9yi4BKrxF8h65NkVE1raCCWFKUs5ngub2ECxhvfaZe",
};

const service: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
