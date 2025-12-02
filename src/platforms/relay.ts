import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
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

import { jupiterV6Contract } from "./jupiter";

const contract = {
  name: "WSOL Unwrapper",
  address: "DzACDmwdqc5ADPJKnZEcQAgpsPdvYzvYBMihPNN48pFE",
};

const service: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "Bridge",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract, jupiterV6Contract],
};

export const services: ServiceRaw[] = [service];
export default services;
