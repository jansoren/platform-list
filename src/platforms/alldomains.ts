import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "alldomains",
  name: "AllDomains",
  description: "Web3 Identity for Everyone",
  tags: ["tool", "dapp"],
  links: {
    website: "https://alldomains.id/",
    discord: "https://discord.com/invite/alldomains",
    telegram: "https://t.me/AllDomainsID",
    twitter: "https://twitter.com/AllDomains_",
    github: "https://github.com/onsol-labs",
    documentation: "https://docs.alldomains.id/protocol/",
  },
  tokens: ["BaoawH9p2J8yUK9r5YXQs3hQwmUJgscACjmTkh8rMwYL"],
};

const contract = {
  name: "Name Service",
  address: "ALTNSZ46uaAUU7XUV6awvdorLGqAsPwa9shm7h4uP2FK",
};

const coSignerContract = {
  name: "Top Level Domain CoSigner",
  address: "TCSVHqadS2swhap43BnZtmeEAPNXfpc3w2HLBredVaR",
};

const nameHouseContract = {
  name: "Name House",
  address: "NH3uX6FtVE2fNREAioP7hm5RaozotZxeL6khU1EHx51",
};

const nameHouseService: ServiceRaw = {
  id: `${platform.id}-name-house`,
  name: "Name House",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [nameHouseContract],
};

export const services: ServiceRaw[] = [nameHouseService];
export default services;
