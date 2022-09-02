import { gql } from "@apollo/client";

/** Get detailed info about a community */
export const GET_COMMUNITY_BY_DOMAIN = gql`
  query GET_COMMUNITY_BY_DOMAIN($bebdomain: String) {
    CommunityQuery {
      getCommunityByDomainOrTokenId(bebdomain: $bebdomain) {
        _id
        tokenId
        accountCommunity {
          _id
          canRead
          canWrite
        }
      }
    }
  }
`;
