import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "artrade",
  name: "Artrade",
  description: "Sales club for art & luxury items",
  links: {
    website: "https://artrade.app/",
    twitter: "https://x.com/ArtradeApp",
    discord: "https://discord.gg/QmCeeqmpMz",
    telegram: "https://t.me/ArtradeEnglish",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const contract = {
  name: "Artrade",
  address: "Yt3A8KLfo7JEz8RGHw2zbaQE6MVcf9duKmb24dgXbsD",
};

const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Artrade",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
