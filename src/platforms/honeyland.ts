import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "honeyland",
  name: "Honeyland",
  description: "HDX Staking",
  tags: ["dapp"],
  links: {
    website: "https://honey.land/",
  },
};

const contract = {
  name: "Staking",
  address: "F1pkXm8W1WNbRvMoZTuKftHJ92ffuzddCCSRKKvCVL7n",
};

const service: ServiceRaw = {
  id: "honeyland-staking",
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
