const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  completedDates: [String], // Array of dates the habit was completed
});

module.exports = mongoose.model('Habit', HabitSchema);