import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "puffcoin",
  name: "Puff",
  links: {
    website: "https://staking.puffcoin.fun/",
  },
  tags: ["memecoin"],
};

const contract = {
  name: "Staking",
  address: "q8gz8Sww7Xexpqk9DrEMjNXMHnFx6dB3EYe32PwHHd6",
};

const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
