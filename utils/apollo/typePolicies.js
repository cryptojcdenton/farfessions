import { offsetLimitPagination } from "@apollo/client/utilities";

export const typePolicies = {
  Community: {
    keyFields: ["tokenId"],
  },
  Query: {
    fields: {
      getPostFeed: {
        ...offsetLimitPagination([
          "sort",
          "filters",
          ["post", "account", "excludeComments", "community", "communities"],
        ]),
      },
    },
  },
};
