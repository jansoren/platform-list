import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "tribeca",
  name: "Tribeca",
  description: "Onchain Governance.",
  tags: ["dapp", "dao"],
  links: {
    website: "https://tribeca.so/gov/",
    twitter: "https://x.com/thesaberdao",
    github: "https://github.com/saberdao/tribeca",
  },
};

const contract = {
  name: "Locker",
  address: "LocktDzaV1W2Bm9DeZeiyz4J9zs4fRqNiYqQyracRXw",
};

const governanceContract = {
  name: "Governance",
  address: "Govz1VyoyLD5BL6CSCxUJLVLsQHRwjfFj1prNsdNg5Jw",
};

const service: ServiceRaw = {
  id: `${platform.id}`,
  name: "Locker",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const governanceService: ServiceRaw = {
  id: `${platform.id}-governance`,
  name: "Governance",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [governanceContract],
};

export const services: ServiceRaw[] = [service, governanceService];
export default services;
