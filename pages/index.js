import React from "react";
import Head from "next/head";
import { Text } from "@chakra-ui/react";

import { WalletContextProvider } from "../utils/context/WalletContext";
import { AuthContextProvider } from "../utils/context/AuthContext";

import { CreatePostInput } from "../components/post/CreatePostInput";
export default function Home() {
  return (
    <div>
      <Head>
        <title>BEB</title>
        <meta name="description" content="Anon feedback app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletContextProvider>
        <AuthContextProvider>
          <CreatePostInput />
        </AuthContextProvider>
      </WalletContextProvider>
    </div>
  );
}
