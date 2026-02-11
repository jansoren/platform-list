import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "Tender",
  name: "Tender Merchant",
  description: "Tender empowers modern businesses to accept crypto payments effortlessly without needing to become crypto experts. Whether you're a physical store,digital platform, or global marketplace.",
  defiLlamaId: "tendermerchant",
  links: {
    website: "https://tender.cash/",
    twitter: "https://x.com/Tender_Cash",
    github: "https://github.com/Tender-cash/",
    documentation: "https://docs.tender.cash/",
  },
  tokens: ["TokenMintAddress1", "TokenMintAddress2"],
  tags: ["tool"], 
};

export const services: ServiceRaw[] = [];
export default services;