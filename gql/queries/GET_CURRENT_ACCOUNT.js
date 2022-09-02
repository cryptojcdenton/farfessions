import { gql } from "@apollo/client";
import { CORE_ACCOUNT_FIELDS } from "../fragments/CORE_ACCOUNT_FIELDS";

export const GET_CURRENT_ACCOUNT = gql`
  ${CORE_ACCOUNT_FIELDS}
  query GET_CURRENT_ACCOUNT {
    getCurrentAccount {
      ...CORE_ACCOUNT_FIELDS
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
`;
