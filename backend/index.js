const https = require('https');
const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  // Load your SSL certificate
  const sslOptions = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
  };

  // Create an HTTPS server
  https.createServer(sslOptions, app).listen(4000, () => {
    console.log(`Server is running on https://localhost:4000${server.graphqlPath}`);
  });
}

startServer();