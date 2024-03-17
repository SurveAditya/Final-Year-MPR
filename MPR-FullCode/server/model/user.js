const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  contact: {
    type: Number,
    default: null,
  },
  disabilityType: {
    type: String,
    default: null,
  },
  disabilityPercentage: {
    type: Number,
    default: null,
  },
  disabilityProof: {
    type: {
      name: String,
      year: String,
      status: String,
    },
    default: null,
  },
  skills: {
    type: [String],
    default: null,
  },
  videoId: {
    type: String,
    default: null,
  },
  pin: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
