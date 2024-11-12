import { gql } from '@apollo/client';

export const ADD_HABIT = gql`
  mutation AddHabit($name: String!, $description: String) {
    addHabit(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;