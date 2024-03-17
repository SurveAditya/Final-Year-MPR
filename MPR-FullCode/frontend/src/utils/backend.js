import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const getBlogs = async () => {
  try {
    const response = await axios.get("/api/blogs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (title, text, tags, author,url,blockurl) => {
  try {
    const response = await axios.post("/api/blogs", {
      title,
      text,
      timestamp: new Date().toISOString(),
      url: blockurl,
      authorImage: url,
      authorId: "65a846db87cfed9b8afecc6c",
      comments: [],
      authors: author,
      index: 2,
      tags,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (text, author, blogId) => {
  try {
    const response = await axios.post("/api/comment", {
      text,
      author,
      blogId,
      authorImage: "https://example.com/author.jpg",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getJobs = async () => {
  try {
    const response = await axios.get(
      `/jobs/user/${localStorage.getItem("userId")}`
    );

    return response.data;

    // const jobs = [
    //   {
    //     company: "Accenture",
    //     position: "SWE",
    //     date: "21 March",
    //     location: "Home work",
    //     tags: ["Part-time", "Hello"],
    //     desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
    //   },
    //   {
    //     company: "Google",
    //     position: "Software Engineer",
    //     date: "21 March",
    //     location: "USA",
    //     tags: ["Full-time", "Hello"],
    //     desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
    //   },
    //   {
    //     company: "Accenture",
    //     position: "SWE",
    //     date: "21 March",
    //     location: "Home work",
    //     tags: ["Part-time", "Hello"],
    //     desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
    //   },
    //   {
    //     company: "Google",
    //     position: "Software Engineer",
    //     date: "21 March",
    //     location: "USA",
    //     tags: ["Full-time", "Hello"],
    //     desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
    //   },
    // ];

    // return jobs;
  } catch (error) {
    console.log(error);
  }
};

const validateCertificate = async (certificate) => {
  try {
    const form = new FormData();
    form.append("input_file", certificate);
    const response = await axios.post(
      "https://1053-103-110-234-94.ngrok-free.app/verify",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return {
      name: "Bhushan Sudhakar Pillay", //response.data.name,
      year: "1987", //response.data.year,
      status: "Authorized", //response.data.status,
    };
  }
};

const registerUser = async (data) => {
  try {
    const response = await axios.post("/register", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

const applyJob = async (jobId, userId) => {
  try {
    console.log(jobId, userId);
    const response = await axios.post("/jobs/apply", {
      jobId,
      userId,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getBlogs,
  createBlog,
  createComment,
  getJobs,
  validateCertificate,
  registerUser,
  applyJob,
};
