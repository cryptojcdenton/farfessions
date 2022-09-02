import React from "react";
import Cookies from "js-cookie";
import { Box, Button, Textarea, useToast } from "@chakra-ui/react";

import { client } from "../../utils/apollo/client";
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
        await client.refetchQueries({
          include: ["GET_POST_FEED"],
        });
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
    <Box py={4}>
      <Textarea
        border="none"
        fontSize={["2xl", null, null, "5xl"]}
        height="sm"
        placeholder="Type here. Your post will be anonymous and public to the network."
        isRequired={true}
        value={value}
        resize="none"
        variant="unstyled"
        color="#444448"
        _placeholder={{
          color: "#A9A8AE",
        }}
        backgroundColor="whiteAlpha.600"
        px={4}
        py={2}
        fontWeight="light"
        backdropBlur="48px"
        backdropFilter={"auto"}
        rounded="xl"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Textarea>
      <Box w="100%" display="flex" justifyContent={"center"} py={4}>
        <MustBeSignedIn>
          <Button
            isDisabled={loading}
            onClick={() => onSubmit(value)}
            px={16}
            backgroundColor="#E7FFA4"
            color="green.800"
            _hover={{
              backgroundColor: "#E7FFA4",
              transform: "scale(1.05)",
            }}
            _focus={{
              backgroundColor: "#E7FFA4",
            }}
            py={12}
            fontSize="lg"
            rounded="full"
          >
            Create post
          </Button>
        </MustBeSignedIn>
      </Box>
    </Box>
  );
};
