import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "cudis",
  name: "Cudis",
  tags: ["dapp", "fitness"],
  links: {
    website: "https://www.cudis.xyz/002",
  },
};

const contract = {
  name: "Main",
  address: "H3tzuPeKMHd1Wee4JyuYbwKX6pHTcKGDgPw8caVNTvQu",
};

const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
