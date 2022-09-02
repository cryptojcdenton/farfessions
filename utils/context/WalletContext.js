/* eslint-disable no-inline-comments */
/* eslint-disable no-empty-function */
import React from "react";
import { useAccount, useProvider, useSignMessage } from "wagmi";

/**
 * Context for the registar page to register a new token
 */
export const WalletContext = React.createContext({
  loading: false,
  error: null,
  onSignMessage: () => {},
  provider: null,
  currentAddress: null,
});

export const useWalletContext = () => React.useContext(WalletContext);

export const WalletContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { address, isConnecting, isReconnecting } = useAccount();
  const provider = useProvider();
  const { signMessageAsync } = useSignMessage();

  const isLoading = React.useMemo(() => {
    return isConnecting || isReconnecting || loading;
  }, [isConnecting, isReconnecting, loading]);

  const onSignMessage = async (message) => {
    try {
      setLoading(true);
      const signature = await signMessageAsync({ message });
      setLoading(false);
      return signature;
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        loading: isLoading,
        currentAddress: address,
        onSignMessage,
        provider,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
