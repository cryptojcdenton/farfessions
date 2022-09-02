import { gql } from "@apollo/client";

import { CORE_ACCOUNT_FIELDS } from "../fragments/CORE_ACCOUNT_FIELDS";

/** Get detailed info about a thread */
export const GET_POST_FEED = gql`
  ${CORE_ACCOUNT_FIELDS}
  query GET_POST_FEED(
    $limit: Int
    $offset: Int
    $filters: PostFilter
    $sort: String
  ) {
    getPostFeed(
      limit: $limit
      offset: $offset
      filters: $filters
      sort: $sort
    ) {
      _id
      createdAt
      reactionCount
      commentCount
      richContent {
        _id
        content {
          raw
          html
        }
      }
      account {
        ...CoreAccountFields
      }
    }
  }
`;
