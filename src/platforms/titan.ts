import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "titan",
  name: "Titan",
  description: "Titan is a decentralized exchange and liquidity aggregator.",
  links: {
    website: "https://titandex.io/",
    twitter: "https://x.com/Titan_Exchange",
    discord: "https://discord.gg/titanexchange",
    telegram: "https://t.me/TitanDexSol",
    documentation: "https://titandex.gitbook.io/titan",
  },
  tags: ["tool", "dapp", "dex"],
};

const contract = {
  name: "Swap",
  address: "T1TANpTeScyeqVzzgNViGDNrkQ6qHz9KrSBS4aNXvGT",
};

const service: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
