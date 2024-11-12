// graphql/typeDefs.js
const { gql } = require('apollo-server-express');

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

module.exports = typeDefs;