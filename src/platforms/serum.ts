import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "serum",
  name: "Serum",
  defiLlamaId: "serum",
  isDeprecated: true,
  links: {
    website: "https://projectserum.com/",
    twitter: "https://x.com/projectserum",
  },
  tags: ["dapp"],
  tokens: ["SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"],
};

const contract = {
  name: "CLOB V1",
  address: "4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn",
  networkId: NetworkId.solana,
};

const contract2 = {
  name: "CLOB V2",
  address: "EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o",
  networkId: NetworkId.solana,
};

const contract3 = {
  name: "CLOB V3",
  address: "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-clob`,
  name: "CLOB V1",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const service2: ServiceRaw = {
  id: `${platform.id}-clob-v2`,
  name: "CLOB V2",
  platformId: platform.id,
  contractsRaw: [contract2],
};

export const service3: ServiceRaw = {
  id: `${platform.id}-clob-v3`,
  name: "CLOB V3",
  platformId: platform.id,
  contractsRaw: [contract3],
};

export const services: ServiceRaw[] = [service, service2, service3];
