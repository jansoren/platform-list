import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "dumpy",
  name: "Dumpy",
  links: {
    website: "https://dumpy.fun/",
  },
  tags: ["dapp", "memecoin"],
};

import { jupiterV6Contract } from "./jupiter";
import { saveContract } from "./save";

const lendingContract = {
  name: "Short Lending",
  address: "3JmCcXAjmBpFzHHuUpgJFfTQEQnAR7K1erNLtWV1g7d9",
};

const lendingService: ServiceRaw = {
  id: `${platform.id}-short-lending`,
  name: "Short Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [lendingContract, jupiterV6Contract, saveContract],
};

export const services: ServiceRaw[] = [lendingService];
export default services;
