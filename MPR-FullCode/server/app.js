require("dotenv").config();
require("./config/database").connect();
const { ObjectId } = require("mongodb");

const cors = require("cors");

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const User = require("./model/user");
const auth = require("./middleware/auth");

const file = fs.readFileSync(__dirname + "/swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running.\n");
});

app.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      contact,
      disabilityType,
      disabilityPercentage,
      disabilityProof,
      skills,
      videoId,
      pin,
    } = req.body;

    console.log(req.body);

    // validate the fields
    if (!(email && name)) {
      res.status(400).send("All input is required");
      return;
    }

    // check if user already exist
    const existingUser = await User.findOne({ videoId });

    if (existingUser) {
      res.status(409).send("Data already exists");
      return;
    }

    // create user in our database
    const user = await User.create({
      name: name,
      password,
      email: email.toLowerCase().trim(),
      contact: contact,
      disabilityType: disabilityType,
      disabilityPercentage: disabilityPercentage,
      disabilityProof: disabilityProof,
      skills: skills,
      videoId: videoId,
      pin: pin,
    });

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // validate the fields
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }

  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.password = undefined;
    user.pin = undefined;

    const option = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(200).cookie("token", token, option).json(user);
  }

  res.status(400).send("Invalid Credentials");
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findOne({ videoId: id });
    if (!user) return res.status(404).send("User not found");
    user.password = undefined;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/users", async (req, res) => {
  try {
    const { userIds } = req.body;

    const users = await User.find({ _id: { $in: userIds } });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/dashboard", auth, async (req, res) => {
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send("Logout success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

//blogs
const Blog = require("./model/blogs");
const Comment = require("./model/comments");

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/api/blogs", async (req, res) => {
  try {
    const {
      authors,
      tags,
      text,
      timestamp,
      title,
      url,
      authorImage,
      authorId,
    } = req.body;

    // Create a new blog document
    const blog = await Blog.create({
      authors: authors,
      tags: tags,
      text: text,
      timestamp: timestamp,
      title: title,
      url: url,
      authorImage: authorImage,
      authorId: authorId,
    });

    // Respond with the created blog
    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

//comments
app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/comments", async (req, res) => {
  try {
    const { text, sentiment, author, authorImage, blogId } = req.body;

    // Validate the fields (you can add your own validation logic here)

    // Use await with Comment.create
    const comment = await Comment.create({
      text: text,
      sentiment: sentiment,
      author: author,
      authorImage: authorImage,
    });
    comment._id = comment._id.toString();

    const blog = await Blog.find({ _id: blogId });
    console.log(blog);
    // console.log(comment._id.toString());
    console.log(comment._id.toString());
    const id = comment._id.toString();
    console.log(blogId);
    // await blog.save();
    blog[0].comments.push(comment._id);
    await blog[0].save();

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

// Resume
const Resume = require("./model/resume");
app.get("/resume/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const resume = await Resume.find({ userId: id });
    if (!resume) {
      console.log(resume);
      return res.status(404).send("User not found");
    }

    resume.password = undefined;
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/resume", async (req, res) => {
  const {
    name,
    contact,
    qualifications,
    hobbies,
    achievements,
    interestedIn,
    disabilityType,
    email,
    userId,
  } = req.body;
  console.log(req.body);
  try {
    const isAllready = await Resume.findOne({ userId: userId });

    if(isAllready){
    
      const resume = await Resume.findOneAndUpdate(
        { userId: userId },
        {
          name: name,
          contact: contact,
          qualifications: qualifications,
          hobbies: hobbies,
          achievements: achievements,
          interestedIn: interestedIn,
          disabilityType: disabilityType,
          email: email,
          userId: userId,
        }
      );
      res.status(201).json(resume);
      return;
    }


    const resume = await Resume.create({
      name: name,
      contact: contact,
      qualifications: qualifications,
      hobbies: hobbies,
      achievements: achievements,
      interestedIn: interestedIn,
      disabilityType: disabilityType,
      email: email,
      userId: userId,
    });

    res.status(201).json(resume);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

//Jobs
const Jobs = require("./model/jobs");
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

// 2

app.get("/jobs/user/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findById(id);
    const skills = user.skills;
    const jobs = await Jobs.find({ tags: { $in: skills } });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/jobs/creator/:id", async (req, res) => {
  const id = decodeURI(req.params.id);
  console.log(id);
  try {
    const jobs = await Jobs.find({ createdBy: id });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/jobs", async (req, res) => {
  try {
    const { company, position, location, date, tags, desc, createdBy } =
      req.body;
    // validate the fields
    // if (!(company && position && location && date && description && tags && desc && applicants)) {
    //   res.status(400).send("All input is required");
    // }

    console.log(req.body);

    const job = await Jobs.create({
      company: company,
      position: position,
      location: location,
      date: date,
      tags: tags,
      desc: desc,
      createdBy: createdBy,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/jobs/apply", async (req, res) => {
  try {
    const { jobId, userId } = req.body;

    console.log(req.body);

    const job = await Jobs.findById(jobId);
    job.applicants.push(userId);
    await job.save();

    res.status(201).json(job);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

console.log("The job has been applied");

module.exports = app;
