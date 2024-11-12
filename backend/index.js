const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const connectDB = require('./db');
const Habit = require('./models/Habit');

connectDB();

const typeDefs = gql`
  type Habit {
    id: ID!
    name: String!
    description: String
    completedDates: [String]
  }

  type Query {
    getHabits: [Habit]
  }

  type Mutation {
    addHabit(name: String!, description: String): Habit
    markHabitComplete(id: ID!, date: String!): Habit
  }
`;

const resolvers = {
  Query: {
    getHabits: async () => await Habit.find(),
  },
  Mutation: {
    addHabit: async (_, { name, description }) => {
      const habit = new Habit({ name, description, completedDates: [] });
      await habit.save();
      return habit;
    },
    markHabitComplete: async (_, { id, date }) => {
      const habit = await Habit.findById(id);
      if (!habit.completedDates.includes(date)) {
        habit.completedDates.push(date);
        await habit.save();
      }
      return habit;
    },
  },
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();