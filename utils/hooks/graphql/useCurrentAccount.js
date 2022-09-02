/* eslint-disable no-inline-comments */
import { useLazyQuery } from "@apollo/client";

import { GET_CURRENT_ACCOUNT } from "../../../gql/queries/GET_CURRENT_ACCOUNT";

export const useCurrentAccount = () => {
  const [
    _getCurrentAccount,
    {
      loading: getAccountLoading,
      error: getAccountError,
      data,
      refetch: refetchCurrentAccount,
    },
  ] = useLazyQuery(GET_CURRENT_ACCOUNT);

  const getCurrentAccount = () => {
    return _getCurrentAccount();
  };

  /** Variables */
  const loading = getAccountLoading;

  const error = getAccountError;

  return {
    getCurrentAccount,
    refetchCurrentAccount,
    loading: loading,
    error: error,
    account: data?.getCurrentAccount,
  };
};
