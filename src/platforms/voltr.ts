import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "voltr",
  name: "Voltr",
  links: {
    website: "https://voltr.xyz/",
    twitter: "https://x.com/voltrxyz",
    github: "https://github.com/voltrxyz",
    documentation: "https://docs.voltr.xyz/",
  },
  tags: ["dapp"],
};

const mainContract = {
  name: "Vault",
  address: "vVoLTRjQmtFpiYoegx285Ze4gsLJ8ZxgFKVcuvmG1a8",
};

const vaultService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [vaultService];
export default services;
