import { gql } from "@apollo/client";

/** Search account by farcaster username or display name */
export const SEARCH_ACCOUNT_BY_FARCASTER = gql`
  query SEARCH_ACCOUNT_BY_FARCASTER($query: String) {
    AccountQuery {
      searchAccountByIdentity(query: $query) {
        _id
        identities {
          farcaster {
            username
            _id
            farcasterAddress
            avatarUrl
            displayName
          }
        }
      }
    }
  }
`;
