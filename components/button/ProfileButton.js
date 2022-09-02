import React from "react";
import {
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
} from "@chakra-ui/react";

import { RainbowConnectButton } from "./RainbowConnectButton";

import { useAuthContext } from "../../utils/context/AuthContext";
import { shortenAddress } from "../../utils/helpers/shorten-address";

export const ProfileButton = ({
  titleWhenDisconencted = "Connect wallet",
  titleWhenConnected,
  onClick,
  size = "large",
}) => {
  const { currentAccount, loading, onSignOut } = useAuthContext();
  const titleWhenConnectedWithContext = React.useMemo(() => {
    // return default short address if no title is provided
    if (titleWhenConnected === "DEFAULT")
      return shortenAddress(currentAccount?.address?.address) || null;
    if (titleWhenConnected) return titleWhenConnected;

    if (!currentAccount) return "Sign in";
    if (currentAccount?.identities?.farcaster?.username) {
      return `${currentAccount.identities.farcaster.username}`;
    }
    if (currentAccount?.username) {
      return `${currentAccount.username}`;
    }
    if (currentAccount?.address) {
      return shortenAddress(currentAccount.address.address);
    }

    return null;
  }, [titleWhenConnected, currentAccount]);

  const showWalletButton = React.useMemo(() => {
    if (loading) return false;
    if (currentAccount) return false;
    return true;
  }, [loading, currentAccount]);

  const sharedStyle = React.useMemo(() => {
    return {
      _hover: {
        backgroundColor: "blackAlpha.900",
      },
      _active: {
        backgroundColor: "blackAlpha.900",
      },
      size: "md",
      rounded: "3xl",
      backgroundColor: "blackAlpha.800",
      color: "whiteAlpha.900",
    };
  }, []);

  return showWalletButton ? (
    <RainbowConnectButton
      titleWhenDisconencted={titleWhenDisconencted}
      titleWhenConnected={titleWhenConnectedWithContext}
      onClick={onClick}
      {...sharedStyle}
      isLoading={loading}
    />
  ) : (
    <Menu>
      <MenuButton as={Button} {...sharedStyle} isLoading={loading}>
        <Flex alignItems={"center"}>
          {size === "large" && titleWhenConnectedWithContext}

          <Avatar
            src={currentAccount?.identities?.farcaster?.avatarUrl}
            name={currentAccount?.identities?.farcaster?.displayName}
            size={size === "large" ? "sm" : "md"}
            ml={["0", null, size === "large" ? "2" : "0"]}
            backgroundColor="blackAlpha.900"
          />
        </Flex>
      </MenuButton>
      <MenuList p={0} border="none" rounded={"3xl"}>
        <Box p={2}>
          <MenuItem onClick={onSignOut} rounded={"3xl"}>
            Log out
          </MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};
