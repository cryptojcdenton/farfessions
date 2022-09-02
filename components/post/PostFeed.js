import React from "react";
import { Box, Button, Textarea, useToast } from "@chakra-ui/react";

import { usePostFeed } from "../../utils/hooks/graphql/usePostFeed";
import { useCurrentAccountCommunityPermissions } from "../../utils/hooks/graphql/useCurrentAccountCommunityPermissions";

const Post = ({
  createdAt,
  reactionCount,
  commentCount,
  richContent,
  account,
}) => {
  return <Box>{richContent?.content?.raw}</Box>;
};
export const PostFeed = ({ bebdomain }) => {
  const { getPostFeed, postFeed, loading, error } = usePostFeed();
  const { getCommunityByDomain } = useCurrentAccountCommunityPermissions();
  React.useEffect(() => {
    const init = async () => {
      const { data } = await getCommunityByDomain(bebdomain);
      const community = data?.CommunityQuery?.getCommunityByDomainOrTokenId;
      if (!community) return;

      await getPostFeed(community._id);
    };
    init();
  }, [bebdomain, getCommunityByDomain, getPostFeed]);
  return (
    <Box>
      {postFeed?.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </Box>
  );
};
