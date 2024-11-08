// frontend/src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql', // Backend GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;