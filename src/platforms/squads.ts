import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "squads",
  name: "Squads",
  tags: ["tool", "dapp"],
  links: {
    website: "https://squads.so/",
    twitter: "https://x.com/SquadsProtocol",
    github: "https://github.com/Squads-Protocol",
    documentation: "https://docs.squads.so/main/basics/welcome-to-squads",
  },
};

const contract = {
  name: "Multisig V4",
  address: "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",
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
