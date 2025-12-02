import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "gpool",
  name: "GPool",
  links: {
    website: "https://github.com/gpool-cloud/gpool-staking-ui",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const stakingContract = {
  name: "Staking",
  address: "poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
export default services;
