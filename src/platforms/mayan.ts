import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "mayan",
  name: "Mayan",
  description:
    "Composable, auction-driven transfers that optimize speed and cost for a seamless multichain experience.",
  links: {
    website: "https://mayan.finance/",
    twitter: "https://x.com/MayanFinance",
    discord: "https://discord.gg/mayanfinance",
    documentation: "https://docs.mayan.finance/",
  },
  tags: ["bridge", "tool", "dapp"],
};

import { jupiterV6Contract } from "./jupiter";

const contract = {
  name: "Swift",
  address: "BLZRi6frs4X4DNLw56V4EXai1b6QVESN1BhHBTYM9VcY",
};

const claimService: ServiceRaw = {
  id: `${platform.id}-claim`,
  name: "Claim",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const bridgeService: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "Bridge",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract, jupiterV6Contract],
};

export const services: ServiceRaw[] = [claimService, bridgeService];
export default services;
