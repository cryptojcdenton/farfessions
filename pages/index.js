import React from "react";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";

import { WalletContextProvider } from "../utils/context/WalletContext";
import { AuthContextProvider } from "../utils/context/AuthContext";

import { CreatePostInput } from "../components/post/CreatePostInput";
import { PostFeed } from "../components/post/PostFeed";
import { Header } from "../components/navigation/Header";

import { config } from "../utils/config";

const COMMUNITY_BEBDOMAIN = config.COMMUNITY_BEBDOMAIN;

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
          <Heading>Hello!</Heading>
          <CreatePostInput bebdomain={COMMUNITY_BEBDOMAIN} />
          <PostFeed bebdomain={COMMUNITY_BEBDOMAIN} />
        </AuthContextProvider>
      </WalletContextProvider>
    </div>
  );
}
