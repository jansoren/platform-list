import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "perena",
  name: "Perena",
  description:
    "Perena is building the infrastructure for stablecoins on Solana, starting with a novel AMM, Numéraire.",
  defiLlamaId: "perena",
  links: {
    website: "https://perena.org/",
    discord: "https://discord.com/invite/vaNnNBqXMt",
    telegram: "https://t.me/perena_community",
    twitter: "https://x.com/Perena__",
    documentation:
      "https://perena.notion.site/Product-Documentation-15fa37a29ca48060afd9cabb21b44d5c",
  },
  tags: ["dapp", "stablecoin"],
};

const contract = {
  name: "Perena",
  address: "NUMERUNsFCP3kuNmWZuXtm1AaQCPj9uw6Guv2Ekoi5P",
};

const service: ServiceRaw = {
  id: "perena",
  name: "Numéraire",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
