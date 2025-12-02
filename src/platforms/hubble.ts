import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "hubble",
  name: "Hubble",
  tags: ["dapp"],
  isDeprecated: true,
  links: {
    website: "https://app.hubbleprotocol.io/",
    twitter: "https://x.com/hubbleprotocol",
    discord: "https://discord.gg/MGujjftKTY",
    github: "https://github.com/hubbleprotocol/",
    documentation: "https://docs.hubbleprotocol.io/",
  },
  tokens: [
    "USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX",
    "HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6",
  ],
};

const contract = {
  name: "Lending",
  address: "HubbLeXBb7qyLHt3x7gvYaRrxQmmgExb7fCJgDqFuB6T",
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
