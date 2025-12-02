import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "godl",
  name: "GODL",
  tags: ["tool"],
  links: {
    website: "https://www.godl.supply/",
    discord: "https://discord.com/invite/BDmq4CZXWr",
    twitter: "https://x.com/GODLsupply",
    documentation: "https://www.godl.supply/about",
  },
  tokens: ["GodL6KZ9uuUoQwELggtVzQkKmU1LfqmDokPibPeDKkhF"],
};

const v3Contract = {
  name: "V3",
  address: "mineWsRs2Rmw2jPMkVbgAbDjV1E23yQ8TEodaX3iza4",
};

const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "Mining",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
export default services;
