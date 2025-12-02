import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "spice",
  name: "Spice",
  description:
    "Token for Governance & Currency in the Lowlife Forms Gameverse.",
  links: {
    website: "https://staking.spicecoin.com/",
    twitter: "https://x.com/spiceonsol",
  },
  tags: ["dapp"],
};

const stakingContract = {
  name: "Staking",
  address: "DQtwoVmEgaGe3hCuefpnBR1rjtLJLJ7sKjVZbUEsSseC",
};

const stakingService: ServiceRaw = {
  id: "spice-staking",
  name: "Spice",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
export default services;
