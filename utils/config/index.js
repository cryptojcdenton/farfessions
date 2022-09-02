export const dev = {
  AUTH_KEY: "beb-yikyak-auth-token-dev",
  SERVER_URI: "http://localhost:8080",
  COOKIE_DOMAIN: "localhost",
  COMMUNITY_BEBDOMAIN: "bebdomains",
  BOT_ID: process.env.NEXT_PUBLIC_BOT_ID,
};

/**
 * IMPORTANT!!!
 * YOU NEED TO ADD NEXT_PUBLIC prefix to expose the env variable at build time
 * https://nextjs.org/docs/basic-features/environment-variables
 */
export const prod = {
  SERVER_URI: "https://protocol.beb.xyz",
  AUTH_KEY: "beb-yikyak-auth-token-prod",
  COOKIE_DOMAIN: ".farfessions.xyz",
  COMMUNITY_BEBDOMAIN: "bebcaster",
  BOT_ID: process.env.NEXT_PUBLIC_BOT_ID,
};

const config = process.env.NODE_ENV === "production" ? prod : dev;
export { config };
