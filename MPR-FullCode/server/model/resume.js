const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
     
    },
    contact: {
        type: Number,
        
    },
    qualifications: {
        type: String,
       
    },
    hobbies: {
        type: String,
    },
    achievements: {
        type: String,
       
    },
    interestedIn: {
        type: String,
  
    },
    disabilityType: {
        type: String,
     
    },
    email: {
        type: String,
  
    },
    userId: {
        type: mongoose.Types.ObjectId,
        
    },
});

const Resume = mongoose.model("resume", resumeSchema);
module.exports = Resume;