const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

        text: {
            type: String,
            default: ""
        },
        sentiment: {
            type: String,   
            default: "positive"
        },
        author: {
            type: String,
            default: ""
        },
        authorImage: {
            type: String,
            default: ""
        }
    
});

const Comment = mongoose.model("comments", commentSchema);
module.exports = Comment;