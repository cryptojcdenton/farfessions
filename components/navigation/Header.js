import React from "react";
import { useRouter } from "next/router";

import { Box, Text } from "@chakra-ui/react";

import { useAuthContext } from "../../utils/context/AuthContext";

import { BebLogo } from "../icon/BebLogo";
import { ProfileButton } from "../button/ProfileButton";

export const Header = () => {
  const router = useRouter();
  const { onSignin, activeAddress } = useAuthContext();

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
          <Text fontWeight={"bold"}>BEBfessions</Text>
        </Box>

        <Box>
          <ProfileButton
            titleWhenDisconencted="Connect wallet"
            onClick={onSignin}
          />
        </Box>
      </Box>
    </Box>
  );
};
