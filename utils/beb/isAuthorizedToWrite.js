import { GET_COMMUNITY_BY_DOMAIN } from "../../gql/queries/GET_COMMUNITY_BY_DOMAIN";

/**
 * Verify if current user can write in a community
 * @param {ApolloClient} client
 * @param {string} bebdomain the domain of the community
 * @returns Promise<Community> - throw error if not authorized to write in community
 */

export const isAuthorizedToWrite = async (client, { bebdomain }) => {
  if (!bebdomain) throw new Error("Missing domain");
  const { data } = await client.query({
    query: GET_COMMUNITY_BY_DOMAIN,
    variables: {
      bebdomain,
    },
  });
  const community = data?.CommunityQuery?.getCommunityByDomainOrTokenId;

  if (!community?.accountCommunity?.canWrite) {
    throw new Error("Not authorized to write in this community");
  }
  return community;
};
