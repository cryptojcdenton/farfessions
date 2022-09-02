import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { client } from "../utils/apollo/client";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Beb Communities",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const theme = extendTheme({
  fonts: {
    heading:
      "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={{
          lightMode: lightTheme(),
          darkMode: darkTheme(),
        }}
      >
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
