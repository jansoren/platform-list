import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "dumpy",
  name: "Dumpy",
  links: {
    website: "https://dumpy.fun/",
  },
  tags: ["dapp", "memecoin"],
};

const lendingContract = {
  name: "Short Lending",
  address: "3JmCcXAjmBpFzHHuUpgJFfTQEQnAR7K1erNLtWV1g7d9",
  networkId: NetworkId.solana,
};

const lendingService: ServiceRaw = {
  id: `${platform.id}-short-lending`,
  name: "Short Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
};

export const services: ServiceRaw[] = [lendingService];
