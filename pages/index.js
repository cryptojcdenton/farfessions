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
        <title>BEBfessions</title>
        <meta name="description" content="Anon feedback app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletContextProvider>
        <AuthContextProvider>
          <Header />
          <Box display="flex" flexDir={"column"} py={8}>
            <Box
              backgroundImage="/banner.png"
              w="100%"
              h="5xl"
              position="absolute"
              zIndex={-1}
              top={0}
              backgroundSize={"cover"}
              filter="blur(12px)"
            ></Box>
            <Box maxW="7xl" m="auto" w="100%">
              <Heading
                color="#202021"
                fontSize="6xl"
                maxW="3xl"
                m="auto"
                textAlign={"center"}
              >
                Talk about Farcaster as Anon!
              </Heading>
              <Text textAlign={"center"}>
                Make sure to sign in with your connected Farcaster address. Only
                Farcaster users can post.
              </Text>
              <CreatePostInput bebdomain={COMMUNITY_BEBDOMAIN} />
              <PostFeed bebdomain={COMMUNITY_BEBDOMAIN} />
            </Box>
          </Box>
        </AuthContextProvider>
      </WalletContextProvider>
    </div>
  );
}
