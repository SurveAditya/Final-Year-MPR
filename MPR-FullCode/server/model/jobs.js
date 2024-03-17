const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  applicants: {
    type: [mongoose.Types.ObjectId],
    default: [],
    required: false,
  },
});

const Jobs = mongoose.model("jobs", jobSchema);
module.exports = Jobs;
