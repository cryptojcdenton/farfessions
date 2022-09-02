import React from "react";
import Head from "next/head";
import { Heading, Box, Text } from "@chakra-ui/react";

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
          <Box display="flex" flexDir={"column"}>
            <Box maxW="7xl" m="auto" w="100%">
              <Heading fontSize="6xl">Anonymous Casters</Heading>
              <CreatePostInput bebdomain={COMMUNITY_BEBDOMAIN} />
              <PostFeed bebdomain={COMMUNITY_BEBDOMAIN} />
            </Box>
          </Box>
        </AuthContextProvider>
      </WalletContextProvider>
    </div>
  );
}
