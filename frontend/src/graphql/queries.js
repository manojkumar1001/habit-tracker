import { gql } from '@apollo/client';

export const GET_HABITS = gql`
  query GetHabits {
    getHabits {
      id
      name
      description
      completedDates
    }
  }
`;