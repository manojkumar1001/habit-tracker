// components/HabitList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HABITS } from '../graphql/queries';
import { List, ListItem, ListItemText, Typography, Box, Divider, Paper } from '@mui/material';

const HabitList = () => {
  const { loading, error, data } = useQuery(GET_HABITS);

  if (loading) return <Typography>Loading habits...</Typography>;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Your Habits
      </Typography>
      <Paper elevation={2}>
        <List>
          {data.getHabits.map((habit, index) => (
            <React.Fragment key={habit.id}>
              <ListItem>
                <ListItemText
                  primary={habit.name}
                  secondary={habit.description || 'No description'}
                />
              </ListItem>
              {index < data.getHabits.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default HabitList;