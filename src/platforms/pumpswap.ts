import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "pumpswap",
  name: "PumpSwap",
  description: "Swap tokens on Pump.",
  defiLlamaId: "pumpswap",
  tags: ["dapp"],
  links: {
    website: "https://swap.pump.fun/",
    telegram: "https://t.me/pumpfunsupport",
  },
};

const contract = {
  name: "PumpSwap AMM",
  address: "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA",
};

const service: ServiceRaw = {
  id: "pumpswap",
  name: "PumpSwap AMM",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
