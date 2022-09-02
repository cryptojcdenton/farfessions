/* eslint-disable no-inline-comments */
import { useLazyQuery } from "@apollo/client";

import { GET_ACCOUNT_SIGNIN_MESSAGE } from "../../../gql/queries/GET_ACCOUNT_SIGNIN_MESSAGE";

export const useCurrentAccount = () => {
  const [
    _getAccountSigninMessage,
    { loading: getAccountLoading, error: getAccountError, data },
  ] = useLazyQuery(GET_ACCOUNT_SIGNIN_MESSAGE);

  const getAccountSigninMessage = () => {
    return _getAccountSigninMessage();
  };

  /** Variables */
  const loading = getAccountLoading;

  const error = getAccountError;

  return {
    getAccountSigninMessage,
    loading: loading,
    error: error,
    message: data?.AccountQuery?.getAccountSigninMessage,
  };
};
