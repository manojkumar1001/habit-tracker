import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HABITS } from '../graphql/queries';

const HabitList = () => {
  const { loading, error, data } = useQuery(GET_HABITS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Habits</h3>
      {data.getHabits.map(habit => (
        <div key={habit.id}>
          <h4>{habit.name}</h4>
          <p>{habit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HabitList;