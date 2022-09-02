import BebRegistryBetaController from "./abis/BebRegistryBetaController.json";

export const dev = {
  AUTH_KEY: "beb-yikyak-auth-token-dev",
  SERVER_URI: "http://localhost:8080",
  COOKIE_DOMAIN: "localhost",
};

/**
 * IMPORTANT!!!
 * YOU NEED TO ADD NEXT_PUBLIC prefix to expose the env variable at build time
 * https://nextjs.org/docs/basic-features/environment-variables
 */
export const prod = {
  SERVER_URI: "https://protocol.beb.xyz",
  AUTH_KEY: "beb-yikyak-auth-token-prod",
  COOKIE_DOMAIN: ".beb.to",
};

const config = process.env.NODE_ENV === "production" ? prod : dev;
export { config };
