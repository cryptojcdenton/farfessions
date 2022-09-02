import { useMutation } from "@apollo/client";

import { AUTH_BY_SIGNATURE } from "../../../gql/mutations/AUTH_BY_SIGNATURE";

export const useSignin = () => {
  const [
    _onSignin,
    { loading: signinLoading, data: signinData, error: signinError },
  ] = useMutation(AUTH_BY_SIGNATURE);

  const onSignin = async ({ address, signature }) => {
    if (!address || !signature) throw new Error("Missing address or signature");
    return _onSignin({
      variables: {
        address,
        signature,
        chainId: 1,
      },
    });
  };

  /** Variables */
  const loading = signinLoading;

  const signinFailed = signinData?.authBySignature?.success === false;

  const error =
    signinError || (signinFailed && signinData?.authBySignature?.message);

  return {
    onSignin,
    loading: loading,
    error: error,
    accessToken: signinData?.authBySignature?.accessToken,
  };
};
