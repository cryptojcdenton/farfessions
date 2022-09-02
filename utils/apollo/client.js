import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

import { config } from "../config";
import { typePolicies } from "./typePolicies";

/** Create an apollo client which gets the authentication detail from cookie */
const createClient = (authToken) => {
  const httpLink = createHttpLink({
    uri: `${config.SERVER_URI}/graphql`,
  });

  const retryLink = new RetryLink();

  const authLink = setContext((_, { headers }) => {
    let token;

    if (authToken) {
      token = authToken;
    } else if (typeof window !== "undefined") {
      // get the authentication token from cookie storage if it exists
      token = Cookies.get(config.AUTH_KEY);
    }

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies,
    }),
    link: retryLink.concat(authLink.concat(httpLink)),
  });

  return client;
};

const client = createClient();

export { client, createClient };
