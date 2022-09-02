import React from "react";
import Head from "next/head";
import { Heading, Box, Text, Button } from "@chakra-ui/react";

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
        <title>Farcaster BEBfessions</title>
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
                fontSize={["2xl", null, null, "6xl"]}
                maxW="3xl"
                m="auto"
                textAlign={"center"}
              >
                Talk about Farcaster anonymously!
              </Heading>
              <Text textAlign={"center"}>
                Only Farcaster users can post. We do not track who made the post
                <Button
                  ml={2}
                  as="a"
                  variant="link"
                  href="https://github.com/ethjcdenton/bebfessions"
                  target="_blank"
                >
                  (the code is open-sourced).
                </Button>
              </Text>
              <Box display={"flex"}>
                <Button
                  textDecor={"underline"}
                  m="auto"
                  as="a"
                  variant="link"
                  href="https://bebdotxyz.notion.site/How-to-set-up-Farfession-for-your-community-3adbd5e1a1b349dcb720dfdd5787e66b"
                  target="_blank"
                >
                  Guide on how to deploy your own Farfession
                </Button>
              </Box>
              <CreatePostInput bebdomain={COMMUNITY_BEBDOMAIN} />
              <PostFeed bebdomain={COMMUNITY_BEBDOMAIN} />
            </Box>
          </Box>
        </AuthContextProvider>
      </WalletContextProvider>
    </div>
  );
}
