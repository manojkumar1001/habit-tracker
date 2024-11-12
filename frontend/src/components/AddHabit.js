import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_HABIT } from '../graphql/mutations';
import { GET_HABITS } from '../graphql/queries';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddHabit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addHabit] = useMutation(ADD_HABIT, {
    refetchQueries: [{ query: GET_HABITS }],
    onCompleted: () => {
      setName('');
      setDescription('');
    },
  });

  const handleAddHabit = () => {
    if (name) {
      addHabit({ variables: { name, description } });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents form submission refresh
      handleAddHabit();
    }
  };

  return (
    <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Add a New Habit
      </Typography>
      <TextField
        label="Habit Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for Enter key
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for Enter key
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleAddHabit}
      >
        Add Habit
      </Button>
    </Box>
  );
};

export default AddHabit;