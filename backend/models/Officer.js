const mongoose = require('mongoose');

// Define Officer schema
const officerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // name: {
  //   type: String,
  //   default: 'Officer', // Optional, default to 'Officer' if no name is provided
  // },
  // rank: {
  //   type: String,
  //   default: 'Municipal Officer', // Optional, default to 'Municipal Officer'
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now, // Automatically sets the creation date
  // },
});

// Create and export the model
const Officer = mongoose.model('Officer', officerSchema);

module.exports = Officer;