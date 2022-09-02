import { gql } from "@apollo/client";

export const CORE_ACCOUNT_FIELDS = gql`
  fragment CoreAccountFields on Account {
    _id
    username
    profileImage {
      _id
      src
      isVerified
    }
    bio {
      raw
      json
    }
    address {
      _id
      address
      chain {
        chainId
        name
      }
    }
  }
`;
