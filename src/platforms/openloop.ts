import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "openloop",
  name: "OpenLoop",
  links: {
    twitter: "https://x.com/openloop_so",
    website: "https://openloop.so/",
    discord: "https://discord.gg/75qBRaUczN",
  },
  tags: ["depin"],
};

const contract = {
  name: "Sentry Node",
  address: "2KJeTEHuZrkBTonJyTzuA5oKY3q6moEef2haNbY6evVZ",
};

const service: ServiceRaw = {
  id: `${platform.id}-sentry-node`,
  name: "Sentry Node",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
