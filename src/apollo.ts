import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  credentials: 'include',
  onError: ({ graphQLErrors, networkError }) => {
    // Show the field based errors in the console
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    // Show a network error in the console
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  },
  uri: `http://localhost:4000/graphql` as string,
});

export default client;
