import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "degencoinflip",
  name: "Degen Coin Flip",
  description: "A simple game of chance where you can win or lose SOL.",
  links: {
    website: "https://degencoinflip.com/",
    twitter: "https://x.com/degencoinflip",
    discord: "https://discord.gg/degencoinflip",
  },
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Coinflip",
  address: "BmjJ85zsP2xHPesBKpmHYKt136gzeTtNbeVDcdfybHHT",
};

const service: ServiceRaw = {
  id: `${platform.id}-coinflip`,
  name: "Coinflip",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
