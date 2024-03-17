import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Course from "./Components/Course";
import Home from "./Components/Home";


import Schemes from "./Components/Schemes";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Register from "./Components/Register";
import Blogs from "./Components/Blogs";
import Mentorship from "./Components/Mentorship";
import GrievanceSys from "./Components/GrievanceSys";
import CoursePage from "./Components/CoursePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ResumeMakers from "./Components/ResumeMakers";
import TTS from "./Components/TTS";
import UserInput from "./Components/UserInput";
import AboutUs from "./Components/AboutUs";
import CreateBlog from "./screens/CreateBlog";
import Jobs from "./Components/Jobs";
import Setting from "./screens/Settings";
import Register2 from "./Components/Register2";
import Interview from "./Components/Interview";
function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<UserInput />} /> */}
          <Route index path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/grievance" element={<GrievanceSys />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/resume" element={<ResumeMakers />} />
          <Route path="/tts" element={<TTS />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/test" element={<UserInput />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
