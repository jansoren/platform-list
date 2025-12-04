import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "tiplink",
  name: "TipLink",
  links: {
    website: "https://tiplink.io/",
    twitter: "https://x.com/TipLinkOfficial",
  },
  tags: ["dapp", "wallet"],
};

export const giftCardService: ServiceRaw = {
  id: `${platform.id}-gift-card`,
  name: "Gift Card",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [giftCardService];
