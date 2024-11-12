import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_HABIT } from '../graphql/mutations';
import { GET_HABITS } from '../graphql/queries';

const AddHabit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addHabit] = useMutation(ADD_HABIT, {
    refetchQueries: [{ query: GET_HABITS }],
    onCompleted: () => {
      setName(''); // Clear input fields
      setDescription('');
    },
  });

  const handleAddHabit = () => {
    addHabit({
      variables: { name, description },
    });
  };

  return (
    <div>
      <h3>Add Habit</h3>
      <input
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddHabit}>Add Habit</button>
    </div>
  );
};

export default AddHabit;