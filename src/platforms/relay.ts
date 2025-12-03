import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "relay",
  name: "Relay",
  links: {
    website: "https://relay.link/bridge",
    twitter: "https://x.com/relayprotocol",
    documentation: "https://docs.relay.link/what-is-relay",
  },
  tags: ["dapp", "bridge"],
};

const contract = {
  name: "WSOL Unwrapper",
  address: "DzACDmwdqc5ADPJKnZEcQAgpsPdvYzvYBMihPNN48pFE",
  networkId: NetworkId.solana,
};

const relayContract = {
  name: "Relay Bridge",
  address: "99vQwtBwYtrqqD9YSXbdum3KBdxPAVxYTaQ3cfnJSrN2",
  networkId: NetworkId.solana,
};

const service: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "Bridge",
  platformId: platform.id,
  contractsRaw: [contract],
};

const relayService: ServiceRaw = {
  id: `${platform.id}-relay-bridge`,
  name: "Relay Bridge",
  platformId: platform.id,
  contractsRaw: [relayContract],
};

export const services: ServiceRaw[] = [service, relayService];
