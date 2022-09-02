/* eslint-disable no-inline-comments */
import { useLazyQuery } from "@apollo/client";

import { GET_COMMUNITY_BY_DOMAIN } from "../../../gql/queries/GET_COMMUNITY_BY_DOMAIN";

export const useCurrentAccountCommunityPermissions = () => {
  const [
    _getCommunityByDomain,
    { loading: getCommunityLoading, error: getCommunityError, data },
  ] = useLazyQuery(GET_COMMUNITY_BY_DOMAIN);

  const getCommunityByDomain = (bebdomain) => {
    return _getCommunityByDomain({
      variables: {
        bebdomain,
      },
    });
  };

  /** Variables */
  const loading = getCommunityLoading;

  const error = getCommunityError;

  return {
    getCommunityByDomain,
    loading: loading,
    error: error,
    account: data?.CommunityQuery?.getCommunityByDomainOrTokenId,
  };
};
