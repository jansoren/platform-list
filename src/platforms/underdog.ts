import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "underdog",
  name: "Underdog",
  links: {
    website: "https://mint.underdogprotocol.com/",
    twitter: "https://x.com/BackAnUnderdog",
  },
  tags: ["tool", "dapp"],
};

const mainContract = {
  name: "Core",
  address: "updg8JyjrmFE2h3d71p71zRXDR8q4C6Up8dDoeq3LTM",
};

const bubblegumContract = {
  name: "Bubblegum",
  address: "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
};

const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [mainContract],
};

const metadataService: ServiceRaw = {
  id: `${platform.id}-metadata`,
  name: "Metadata",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [bubblegumContract, mainContract],
};

export const services: ServiceRaw[] = [service, metadataService];
export default services;
