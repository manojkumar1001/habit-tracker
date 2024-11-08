// frontend/src/App.js
import React from 'react';
import { gql, useQuery } from '@apollo/client';

// Define a basic GraphQL query
const HELLO_QUERY = gql`
  query {
    hello
  }
`;

const App = () => {
  // Use Apollo's useQuery hook to run the query
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL Test</h1>
      <p>{data.hello}</p>
    </div>
  );
};

export default App;