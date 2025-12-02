import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "pluto",
  name: "Pluto",
  description: "Leveraged Yield Machine on Solana",
  defiLlamaId: "pluto",
  tags: ["dapp"],
  links: {
    website: "https://pluto.so/",
    discord: "https://discord.com/invite/plutoleverage",
    telegram: "https://t.me/PlutoLeverage",
    twitter: "https://x.com/plutoleverage",
    github: "https://github.com/plutoleverage/",
    documentation: "https://docs.pluto.so/",
  },
};

import { jupiterV6Contract } from "./jupiter";

const contract = {
  name: "Leverage Machine",
  address: "5UFYdXHgXLMsDzHyv6pQW9zv3fNkRSNqHwhR7UPnkhzy",
};

const contractV2 = {
  name: "Leverage Machine V2",
  address: "PLUtoojGogHkKWXH4ZY3SiNYhsiE5CEoMJLPargRoQ9",
};

const withJupiterSwapService: ServiceRaw = {
  id: `${platform.id}-leverage-with-jupiter-swap`,
  name: "Leverage",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract, jupiterV6Contract],
};

const v2WithJupiterSwapService: ServiceRaw = {
  id: `${platform.id}-leverage-v2-with-jupiter-swap`,
  name: "Leverage",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contractV2, jupiterV6Contract],
};

export const services: ServiceRaw[] = [
  withJupiterSwapService,
  v2WithJupiterSwapService,
];
export default services;
