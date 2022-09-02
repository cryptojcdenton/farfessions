import React from "react";
import { useRouter } from "next/router";
import { Box, Text, HStack, IconButton } from "@chakra-ui/react";

import { BebLogo } from "../icon/BebLogo";
import { Github } from "../icon/Github";

import { ProfileButton } from "../button/ProfileButton";

export const Header = () => {
  const router = useRouter();

  const onLogoClick = () => {
    router.push("/");
  };
  return (
    <Box bg="background.overlay" backdropFilter={"auto"} backdropBlur="48px">
      <Box
        zIndex={99}
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        overflow={"hidden"}
        marginY="auto"
        p={4}
        backdropBlur="48px"
        border="1px solid"
        borderColor={"whiteAlpha.400"}
        backgroundColor={`whiteAlpha.600`}
      >
        <Box h="100%" display={"flex"} alignItems="center">
          <Box w={8} h={8} as="button" onClick={onLogoClick}>
            <BebLogo w={8} h={8} />
          </Box>
          <Text fontWeight={"bold"}>Farcaster BEBfessions</Text>
        </Box>

        <HStack>
          <IconButton
            mr={2}
            icon={<Github w="24px" h="24px" />}
            href="https://github.com/ethjcdenton/bebfessions"
            target="_blank"
            as="a"
          ></IconButton>
          <ProfileButton
            titleWhenDisconencted="Connect wallet"
            titleWhenConnected={"DEFAULT"}
          />
        </HStack>
      </Box>
    </Box>
  );
};
