import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "amulet",
  name: "Amulet",
  links: {
    website: "https://amulet.org/",
    twitter: "https://x.com/AmuletProtocol",
  },
  tags: ["tool"],
  isDeprecated: true,
};

const contract = {
  name: "Core",
  address: "AFX6h67CCoqcJcoFbq12dabMLDruQ38U2nogpeU7ECLa",
};

const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
