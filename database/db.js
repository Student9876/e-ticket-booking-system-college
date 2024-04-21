// database/db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/trainsData', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const trainSchema = new mongoose.Schema({
  train_no: String,
  train_name: String,
  weekday_for_departure: [String],
  starting_point: String,
  ending_point: String,
  departure_time: String,
  arrival_time: String,
  duration: String,
  intermediate_stops: [String],
  facilities: {
    dining: String,
    restrooms: String,
    wifi: String,
    power_outlets: String,
    entertainment: String
  },
  accessibility: {
    wheelchair_ramps: String,
    designated_seating: String,
    accessible_restrooms: String
  },
  coach_layout: String,
  food_options: {
    catering_services: String,
    menu_options: [String],
    meal_timings: String,
    special_meals: String
  },
  train_status: {
    current_location: String,
    next_station: String,
    estimated_arrival_time_next_station: String,
    delay_status: String
  },
  weather_forecast: {
    destination: String,
    forecast: String
  },
  local_attractions: {
    destination: String,
    attractions: [String],
    events: [String]
  }
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
