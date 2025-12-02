import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "tuktuk",
  name: "TukTuk",
  description: "Schedule Tasks on Solana",
  links: {
    website: "https://www.tuktuk.fun",
    documentation: "https://www.tuktuk.fun/docs",
    github: "https://github.com/helium/tuktuk",
  },
  tags: ["tool"],
};

const contract = {
  name: "Schedule",
  address: "tuktukUrfhXT6ZT77QTU8RQtvgL967uRuVagWF57zVA",
};

const service: ServiceRaw = {
  id: `${platform.id}-schedule`,
  name: "Schedule",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
