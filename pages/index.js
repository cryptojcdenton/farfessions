import React from "react";
import Head from "next/head";

import { WalletContextProvider } from "../utils/context/WalletContext";
import { AuthContextProvider } from "../utils/context/AuthContext";

import { CreatePostInput } from "../components/post/CreatePostInput";
import { Header } from "../components/navigation/Header";

/** swap this out for yours */
const COMMUNITY_BEBDOMAIN = "bebdomains";

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
          <Header />
          <CreatePostInput bebdomain={COMMUNITY_BEBDOMAIN} />
        </AuthContextProvider>
      </WalletContextProvider>
    </div>
  );
}
