import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HabitList from './components/HabitList';
import AddHabit from './components/AddHabit';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Habit Tracker</h1>
        <AddHabit />
        <HabitList />
      </div>
    </ApolloProvider>
  );
}

export default App;