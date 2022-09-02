import { gql } from "@apollo/client";
import { CORE_ACCOUNT_FIELDS } from "../fragments/CORE_ACCOUNT_FIELDS";

export const CREATE_POST = gql`
  ${CORE_ACCOUNT_FIELDS}
  mutation CREATE_POST(
    $communityId: ID
    $contentRaw: String
    $channelId: String
  ) {
    createPostOrReplyForAccount(
      communityId: $communityId
      contentRaw: $contentRaw
      channelId: $channelId
    ) {
      code
      success
      message
      post {
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
  }
`;
