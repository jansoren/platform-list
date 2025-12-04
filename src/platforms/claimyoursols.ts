import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "claimyoursols",
  name: "Claim Your Sols",
  links: {
    website: "https://claimyoursols.app/",
  },
  tags: ["tool"],
  isDeprecated: true,
};

export const closeTokenAccountService: ServiceRaw = {
  id: `${platform.id}-close-token-account`,
  name: "Close Token Account",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [closeTokenAccountService];
