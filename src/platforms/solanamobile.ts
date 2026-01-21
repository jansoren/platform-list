import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solanamobile",
  name: "Solana Mobile",
  description: "Seeker, the definitive crypto mobile device.",
  links: {
    website: "https://solanamobile.com/",
    discord: "https://discord.gg/solanamobile",
    twitter: "https://x.com/solanamobile",
    documentation: "https://docs.solanamobile.com/",
  },
  tags: ["wallet"],
  platformToken: "SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3",
};

export const stakingContract = {
  name: "Staking",
  address: "SKRskrmtL83pcL4YqLWt6iPefDqwXQWHSw9S9vz94BZ",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  link: "https://stake.solanamobile.com/",
};

export const services: ServiceRaw[] = [stakingService];
