import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "sentre",
  name: "Sentre",
  isDeprecated: true,
  links: {
    website: "https://sentre.io/",
    twitter: "https://x.com/SentreProtocol",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Utility",
  address: "7oyG4wSf2kz2CxTqKTf1uhpPqrw9a8Av1w5t8Uj5PfXb",
};

const service: ServiceRaw = {
  id: `${platform.id}-utility`,
  name: "Utility",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
