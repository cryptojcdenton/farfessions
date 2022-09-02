import React from "react";
import { Box } from "@chakra-ui/react";

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
          <ProfileButton onClick={onSignin} />
        </Box>
      )}
    </Box>
  );
};
