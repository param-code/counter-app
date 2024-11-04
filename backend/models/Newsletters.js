// models/Subscription.js
const mongoose = require('mongoose');

const Newsletter = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails
    match: /.+\@.+\..+/ // Basic regex to validate email format
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscription', Newsletter);
