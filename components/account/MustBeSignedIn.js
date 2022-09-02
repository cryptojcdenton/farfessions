import React from "react";
import { Text, Box } from "@chakra-ui/react";

import { ProfileButton } from "../button/ProfileButton";

import { useAuthContext } from "../../utils/context/AuthContext";

export const MustBeSignedIn = ({ children }) => {
  const { onSignin, currentAccount } = useAuthContext();

  return (
    <Box>
      {currentAccount ? (
        children
      ) : (
        <Box>
          <Text color="text.secondary" mb={4}>
            You must be signed in to post
          </Text>
          <ProfileButton onClick={onSignin} />
        </Box>
      )}
    </Box>
  );
};
