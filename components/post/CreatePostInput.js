import React from "react";
import { Box, Button } from "@chakra-ui/react";

import { MustBeSignedIn } from "../account/MustBeSignedIn";
export const CreatePostInput = () => {
  return (
    <Box>
      <MustBeSignedIn>
        <Button>Create post</Button>
      </MustBeSignedIn>
    </Box>
  );
};
