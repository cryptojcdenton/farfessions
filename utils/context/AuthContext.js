/* eslint-disable no-inline-comments */
/* eslint-disable no-empty-function */
import React from "react";
import Cookies from "js-cookie";

import { useCurrentAccount } from "../../utils/hooks/graphql/useCurrentAccount";
import { useAccountSigninMessage } from "../../utils/hooks/graphql/useAccountSigninMessage";
import { useSignin } from "../../utils/hooks/graphql/useSignin";

import { useWalletContext } from "./WalletContext";

import { config } from "../../utils/config";

import { client } from "../../utils/apollo/client";

export const AuthContext = React.createContext({
  loading: false,
  error: null,
  currentAccount: null,
  activeAddress: null, // the address that is currently active, can be wallet address or account address
  onSignin: () => {},
  onSignOut: () => {},
});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [_loading, toggleLoading] = React.useState(false);
  const [_error, setError] = React.useState(null);

  const { onCreateAccount: _onCreateAccount, error: createAccountError } =
    useCreateAccount();
  const { onSignin: _onSignin, error: signinError } = useSignin();
  const { currentAddress, onSignMessage } = useWalletContext();
  const { getAccountSigninMessage } = useAccountSigninMessage();
  const {
    getCurrentAccount,
    account: currentAccount,
    loading: currentAccountLoading,
    refetchCurrentAccount,
  } = useCurrentAccount();

  const error = React.useMemo(() => {
    return createAccountError || signinError || _error;
  }, [createAccountError, signinError, _error]);
  const loading = React.useMemo(() => {
    return currentAccountLoading || _loading;
  }, [currentAccountLoading, _loading]);
  const activeAddress = React.useMemo(() => {
    return currentAccount?.address?.address || currentAddress;
  }, [currentAddress, currentAccount?.address?.address]);

  React.useEffect(() => {
    if (Cookies.get(config.AUTH_KEY)) {
      getCurrentAccount();
    }
  }, []);

  const _onSignMessage = async (nonces) => {
    try {
      const signature = await onSignMessage(message);
      return signature;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const _onSigninAndSetCookie = async (signature) => {
    try {
      const { data } = await _onSignin({
        address: currentAddress,
        signature,
      });

      if (!data?.authBySignature?.success) {
        throw new Error("Unable to create account. Please try again later.");
      }
      Cookies.set(config.AUTH_KEY, data.authBySignature.accessToken, {
        domain: config.COOKIE_DOMAIN,
        expires: 180,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const onSignin = async () => {
    toggleLoading(true);
    setError(null);
    try {
      // 1. get message to sign
      const message = await getAccountSigninMessage({
        address: currentAddress,
        chainId: 1,
      });

      // 2. sign message
      const signature = await _onSignMessage(message);
      // 3. signin
      await _onSigninAndSetCookie(signature);
      // 4. get current account info
      await refetchCurrentAccount();

      toggleLoading(false);
    } catch (e) {
      toggleLoading(false);
      setError(e.message);
    }
  };

  const onSignOut = async () => {
    toggleLoading(true);
    Cookies.remove(config.AUTH_KEY, {
      domain: config.COOKIE_DOMAIN,
      expires: 180,
    });
    await client.resetStore();
    toggleLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loading: loading,
        error,
        onSignin,
        onSignOut,
        activeAddress,
        currentAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
