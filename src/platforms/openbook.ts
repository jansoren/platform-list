import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "openbook",
  name: "OpenBook",
  defiLlamaId: "openbook",
  links: {
    website: "https://www.openbook.ag/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "V1",
  address: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
};

const contract2 = {
  name: "V2",
  address: "opnbkNkqux64GppQhwbyEVc3axhssFhVYuwar8rDHCu",
};

const contractV2 = {
  name: "V2",
  address: "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb",
};

const service: ServiceRaw = {
  id: `${platform.id}-v1`,
  name: "V1",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
