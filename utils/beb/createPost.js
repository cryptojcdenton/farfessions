import { CREATE_POST } from "../../gql/mutations/CREATE_POST";

/**
 * Create a post on behalf of the user.
 * @param {ApolloClient} client
 * @param {string} contentRaw the raw content of the post
 * @param {string} communityId the id of the community the post is in
 * @returns Promise<Boolean> - throw error if not authorized to write in community
 */

export const createPost = async (client, { contentRaw, communityId }) => {
  if (!communityId) throw new Error("Missing community");
  if (!contentRaw) return;
  const { data } = await client.mutate({
    mutation: CREATE_POST,
    variables: {
      communityId,
      contentRaw,
    },
  });
  const post = data?.createPostOrReplyForAccount?.post;
  if (!data?.createPostOrReplyForAccount?.success) {
    throw new Error(data?.createPostOrReplyForAccount?.message);
  }
  return post;
};
