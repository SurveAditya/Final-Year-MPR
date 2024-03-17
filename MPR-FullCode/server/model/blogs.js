const mongoose = require("mongoose");
const User = require("./user");

const blogSchema = new mongoose.Schema({
  authors: {
    type: String,
  },
  tags: {
    type: [String],
  },
  text: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  authorImage: {
    type: String,
    default: "",
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    default: "",
    ref : 'user'
  },
  comments: {
    type: [mongoose.Types.ObjectId],
    default: [],
    required: false,
    ref : "comments"
},
});

const Blog = mongoose.model("blogs", blogSchema);
module.exports = Blog;
