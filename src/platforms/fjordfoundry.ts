import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "fjordfoundry",
  name: "Fjord Foundry",
  links: {
    website: "https://www.fjordfoundry.com/",
    discord: "https://discord.com/invite/fjordfoundry",
    twitter: "https://x.com/FjordFoundry",
    documentation: "https://help.fjordfoundry.com/fjord-foundry-docs",
  },
  tags: ["launchpad"],
};

const contract = {
  name: "Bootstrap",
  address: "w4cy1r9U7ag99RfBjb3Mz69oiANFeQystgQXerwUWLM",
};

const service: ServiceRaw = {
  id: `${platform.id}-bootstrap`,
  name: "Bootstrap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
