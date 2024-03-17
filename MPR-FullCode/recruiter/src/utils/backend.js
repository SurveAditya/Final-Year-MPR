import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export async function createJob(position, location, date, tags, desc) {
  try {
    const res = await axios.post("/jobs", {
      company: localStorage.getItem("company"),
      position,
      location,
      date,
      tags,
      desc,
      createdBy: localStorage.getItem("email") || "sainath@gmail.com",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getJobs() {
  try {
    const res = await axios.get(
      "/jobs/creator/" + encodeURI(localStorage.getItem("email"))
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers(userIds) {
  try {
    const res = await axios.post("/users", { userIds });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
