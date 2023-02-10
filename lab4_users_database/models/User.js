const mongoose = require('mongoose');

// Create a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  web: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

// Create a Mongoose model for the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;