import React, { useEffect, useState } from "react";
import data from "../assets/blogs.json";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/user-dummy.jpeg";
import Navbar from "./Navbar";
import { getBlogs } from "../utils/backend";

function Blogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await getBlogs();
      console.log(res);
      setBlogs(res);
      console.log(blogs);
      // setBlogs(data);
    }
    fetchBlogs();
  }, []);
  

  return (
    <div>
      <Navbar />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="mx-auto max-w-2xl lg:mx-0" aria-label="Audible Forum ! Dont Only Read the forum no listen then too!">
              <a
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                aria-label="This is blog page"
              >
                Ideas 
              </a>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                "Be a Part of Empowering Lives. Your Contribution, Their Independence – Together, We Create Accessible Futures!"
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate("/createBlog");
                }}
                className="bg-gray-900 text-white px-5 py-2 rounded-lg flex items-center hover:bg-black"
              >
                Create
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  className="fill-white ml-3"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                aria-label={`${blog.title} by ${blog.authroId}`}
                onClick={() => {
                  navigate("/blog", { state: blog });
                }}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" className="text-gray-500">
                    {new Date(blog.timestamp).toDateString().slice(4)}
                  </time>
                  {blog.tags.map((genre) => (
                    <a className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
                      {genre}
                    </a>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"></span>
                    {blog.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {blog.text.slice(0, 300)}...
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={avatar}
                    alt="profile-image"
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        {blog.authors}
                      </a>
                    </p>
                 
                  </div>
                
                  
              
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
