import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "byreal",
  name: "Byreal",
  tags: ["dapp"],
  links: {
    website: "https://www.byreal.io/",
    telegram: "https://t.me/Byreal_Community",
    twitter: "https://x.com/byreal_io",
    documentation: "https://docs.byreal.io/products/getting-started",
  },
};

const clmmContract = {
  name: "CLMMM",
  address: "REALQqNEomY6cQGZJUGwywTBD2UmDT32rZcNnfxQ5N2",
};

const resetContract = {
  name: "Reset",
  address: "REALdpFGDDsiD9tvxYsXBTDpgH1gGQEqJ8YSLdYQWGD",
};

const routerContract = {
  name: "Router",
  address: "REALp6iMBDTctQqpmhBo4PumwJGcybbnDpxtax3ara3",
};

const rfqContract = {
  name: "RFQ",
  address: "REALFP9S4VmrAixmeYa68FrPKn4NVD2QFxxMfz9arhz",
};

const clmmService: ServiceRaw = {
  id: "byreal-clmm",
  name: "CLMM",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [clmmContract],
};

const resetService: ServiceRaw = {
  id: "byreal-reset",
  name: "Reset Launchpad",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [resetContract],
};

const routerService: ServiceRaw = {
  id: "byreal-router",
  name: "Router",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [routerContract],
};

const rfqService: ServiceRaw = {
  id: "byreal-rfq",
  name: "RFQ",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [rfqContract],
};

export const services: ServiceRaw[] = [
  clmmService,
  resetService,
  routerService,
  rfqService,
];
export default services;
