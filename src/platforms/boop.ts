import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "boop",
  name: "Boop",
  tags: ["memecoin", "launchpad", "dapp"],
  links: {
    website: "https://boop.fun/",
    twitter: "hhttps://t.me/boopdotfun",
  },
  tokens: ["boopkpWqe68MSxLqBGogs8ZbUDN4GXaLhFwNP7mpP1i"],
};

const contract = {
  name: "Staking",
  address: "boopURdYr29D4C4BX7UWfi7rHQyinzCb4XRac3SHR85",
};

const poolContract = {
  name: "Pool",
  address: "boopiN5ZqKsQ1uCtQoPG7FeXVmJi7YcwngQQrZCp6qA",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract, poolContract],
};

export const services: ServiceRaw[] = [stakingService];
export default services;
