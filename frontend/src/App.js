import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';
import { Container, Typography, Paper, ThemeProvider, createTheme } from '@mui/material';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' for dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Habit Tracker
            </Typography>
            <AddHabit />
            <HabitList />
          </Paper>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;