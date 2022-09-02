import React from "react";
import Cookies from "js-cookie";
import { Box, Button, Textarea } from "@chakra-ui/react";

import { config } from "../../utils/config";

import { MustBeSignedIn } from "../account/MustBeSignedIn";
export const CreatePostInput = ({ bebdomain }) => {
  const [value, setValue] = React.useState("");

  const onSubmit = React.useCallback(
    async (value) => {
      console.log(bebdomain);
      if (!value || !bebdomain) {
        return;
      }
      const post = await fetch(`/api/community/${bebdomain}/post`, {
        method: "POST",
        body: JSON.stringify({
          contentRaw: value,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${Cookies.get(config.AUTH_KEY)}`,
        },
      });
      console.log(post);
    },
    [bebdomain]
  );
  return (
    <Box>
      <Textarea
        h={"sm"}
        placeholder="Type here..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Textarea>
      <MustBeSignedIn>
        <Button onClick={() => onSubmit(value)}>Create post</Button>
      </MustBeSignedIn>
    </Box>
  );
};
