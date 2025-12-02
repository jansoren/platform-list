import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "mintech",
  name: "Mintech",
  links: {
    website: "https://www.mintechbots.com/",
    discord: "https://t.co/f9eKBmczlm",
    twitter: "https://x.com/mintechbots",
    documentation:
      "https://mintechbots.gitbook.io/mintech-guide/getting-started/welcome",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "minTcHYRLVPubRK8nt6sqe2ZpWrGDLQoNLipDJCGocY",
};

const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
