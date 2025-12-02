import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "kyros",
  name: "Kyros",
  tags: ["dapp"],
  links: {
    website: "https://app.kyros.fi/",
    twitter: "https://x.com/kyrosfi",
  },
};

const contract = {
  name: "Airdrop",
  address: "MerKyPxu2fs6U1oqRbj5KVYApbFcAKzBWG8TDCeEpQ4",
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [airdropService];
export default services;
