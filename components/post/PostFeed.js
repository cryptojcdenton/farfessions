import React from "react";
import {
  Box,
  VStack,
  Flex,
  Avatar,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import * as dayjs from "dayjs";
import InfiniteScroll from "react-infinite-scroll-component";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

import { usePostFeed } from "../../utils/hooks/graphql/usePostFeed";
// import { useCurrentAccountCommunityPermissions } from "../../utils/hooks/graphql/useCurrentAccountCommunityPermissions";
import { config } from "../../utils/config";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s",
    past: "%s ago",
    s: "now",
    m: "1min",
    mm: "%dmin",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "1mth",
    MM: "%dmth",
    y: "1y",
    yy: "%dy",
  },
});

export const getDateFromNow = (date, isInt = true) => {
  if (!date) return "";
  try {
    const parsed = isInt ? new Date(parseInt(date, 10)) : new Date(date);
    if (parsed === "Invalid Date") return "";
    // eslint-disable-next-line no-inline-comments
    return dayjs(parsed).fromNow() || ""; // takes care of NaN
  } catch (e) {
    Sentry.captureException(e);
    return "";
  }
};

const Post = ({ createdAt, richContent, account }) => {
  return (
    <Box
      as="div"
      width="100%"
      rounded={"2xl"}
      p={[2, null, null, 4]}
      border="1px solid"
      borderColor={"blackAlpha.100"}
      boxShadow="0px 10px 20px var(--chakra-colors-blackAlpha-100)"
    >
      <Flex width="100%" alignItems="center">
        <Box as="a" zIndex={"2 !important"}>
          <Avatar
            name={account?.username}
            size="lg"
            mr={4}
            zIndex={2}
            src={account?.profileImage?.src}
            isVerified={account?.profileImage?.isVerified}
          />
        </Box>
        <Flex justifyContent={"space-between"} flex="1" overflow={"hidden"}>
          <Box>
            <Text
              fontWeight={"semibold"}
              _hover={{
                textDecor: "underline",
                cursor: "pointer",
              }}
              as="span"
              alignItems={"center"}
              display="flex"
            >
              {account?.username}
            </Text>
            <Box
              display={"flex"}
              alignItems="center"
              flexWrap={"wrap"}
              m="auto"
            >
              <Text color={"text.secondary"} letterSpacing="wide" fontSize="xs">
                {getDateFromNow(createdAt)}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box p={4}>
        <Box>{richContent?.content?.raw}</Box>
      </Box>
    </Box>
  );
};
export const PostFeed = () => {
  const { getPostFeed, postFeed, loading, error, fetchMore } = usePostFeed();
  const [isEnd, setIsEnd] = React.useState(false);
  React.useEffect(() => {
    getPostFeed({
      filters: { account: config.BOT_ID },
      sort: "lastActivity",
    });
  }, []);

  const next = () => {
    if (loading) return;
    return fetchMore({
      variables: {
        filters: { account: config.BOT_ID },
        limit: 20,
        offset: postFeed.length,
        sort: "lastActivity",
      },
    }).then((res) => {
      if (!res.data || res.data.getPostFeed.length < 20) {
        setIsEnd(true);
      }
    });
  };

  return (
    <InfiniteScroll
      dataLength={postFeed?.length || 20}
      next={next}
      hasMore={true}
      loader={
        <Center>
          <Box mt={2}>
            <Spinner />
          </Box>
        </Center>
      }
      endMessage={<Text mt={2}>You are at the end!</Text>}
    >
      <VStack>
        {postFeed?.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </VStack>
    </InfiniteScroll>
  );
};
