import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "jupiter-jupuary",
  name: "Jupiter Jupuary",
  description:
    "Jupuary is Jupiter's annual airdrop event for their governance token.",
  links: {
    website: "https://jupuary.jup.ag/",
    twitter: "https://twitter.com/JupiterExchange",
  },
  tags: ["dao"],
};

const jupiterJupuaryContract = {
  name: "Jupuary",
  address: "DiS3nNjFVMieMgmiQFm6wgJL7nevk4NrhXKLbtEH1Z2R",
};

const jupuaryService: ServiceRaw = {
  id: `jupiter-exchange-jupuary`,
  name: "Jupuary",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [jupiterJupuaryContract],
};

export const services: ServiceRaw[] = [jupuaryService];
export default services;
