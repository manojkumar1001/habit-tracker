// graphql/resolvers.js
const Habit = require('../models/Habit');

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

module.exports = resolvers;