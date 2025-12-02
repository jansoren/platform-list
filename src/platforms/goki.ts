import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "goki",
  name: "Goki",
  tags: ["tool", "dapp"],
  description:
    "Goki is a Multisig tool that allows users to create and manage multisig wallets on Solana.",
  links: {
    website: "https://goki.so/",
    twitter: "https://x.com/GokiProtocol",
    github: "https://github.com/GokiProtocol",
  },
};

const contract = {
  name: "Multisig",
  address: "GokivDYuQXPZCWRkwMhdH2h91KpDQXBEmpgBgs55bnpH",
};

const service: ServiceRaw = {
  id: `${platform.id}-multisig`,
  name: "Multisig",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
