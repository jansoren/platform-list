import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "wasabi",
  name: "Wasabi",
  defiLlamaId: "wasabi",
  links: {
    website: "https://app.wasabi.xyz/",
    discord: "https://discord.gg/wZqzsfnvmh",
    twitter: "https://x.com/wasabi_protocol",
    documentation: "https://docs.wasabi.xyz/_/overview/what-is-wasabi",
  },
  tags: ["dapp"],
};

import { jupiterV6Contract } from "./jupiter";

const contract = {
  name: "Main",
  address: "spicyTHtbmarmUxwFSHYpA8G4uP2nRNq38RReMpoZ9c",
};

const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract, jupiterV6Contract],
};

const earnService: ServiceRaw = {
  id: `${platform.id}-earn`,
  name: "Trade",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [tradeService, earnService];
export default services;
