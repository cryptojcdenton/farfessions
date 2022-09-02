/* eslint-disable no-inline-comments */
import { useLazyQuery } from "@apollo/client";

import { GET_POST_FEED } from "../../../gql/queries/GET_POST_FEED";

export const usePostFeed = () => {
  const [
    _getPostFeed,
    {
      loading: getPostFeedLoading,
      error: getPostFeedError,
      data,
      refetch: refetchPostFeed,
    },
  ] = useLazyQuery(GET_POST_FEED);

  const getPostFeed = ({ limit = 20, offset = 0, filters = {}, sort } = {}) => {
    return _getPostFeed({
      variables: {
        limit,
        offset,
        filters,
        sort,
      },
    });
  };
  /** Variables */
  const loading = getPostFeedLoading;

  const error = getPostFeedError;

  return {
    getPostFeed,
    refetchPostFeed,
    loading: loading,
    error: error,
    postFeed: data?.getPostFeed,
  };
};
