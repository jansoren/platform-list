import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "iloop",
  name: "ILoop",
  description: "The first AI-optimized Vault for LST and Defi on Solana",
  defiLlamaId: "iloop",
  links: {
    website: "https://app.iloop.finance/",
    discord: "https://discord.com/invite/ffDUZZ4kuu",
    telegram: "https://t.me/iloophq",
    twitter: "https://twitter.com/iLoop_HQ",
    documentation: "https://iloop-1.gitbook.io/docs.iloop.finance",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Lending",
  address: "3i8rGP3ex8cjs7YYWrQeE4nWizuaStsVNUXpRGtMbs3H",
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
