import React from "react";
import Cookies from "js-cookie";
import { Box, Button, Textarea, useToast } from "@chakra-ui/react";

import { config } from "../../utils/config";

import { MustBeSignedIn } from "../account/MustBeSignedIn";

export const CreatePostInput = ({ bebdomain }) => {
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const onSubmit = React.useCallback(
    async (value) => {
      if (!value || !bebdomain) {
        return toast({
          status: "error",
          title: "Error",
          description: "Value cannot be empty",
        });
      }
      setLoading(true);
      const res = await fetch(`/api/community/${bebdomain}/post`, {
        method: "POST",
        body: JSON.stringify({
          contentRaw: value,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${Cookies.get(config.AUTH_KEY)}`,
        },
      });
      setLoading(false);
      if (res.ok) {
        setValue("");
        toast({
          position: "top",
          status: "success",
          title: "Success",
          description: "Post created!",
        });
      } else {
        toast({
          position: "top",
          status: "error",
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    },
    [bebdomain, setValue, toast, setLoading]
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
        <Button isDisabled={loading} onClick={() => onSubmit(value)}>
          Create post
        </Button>
      </MustBeSignedIn>
    </Box>
  );
};
