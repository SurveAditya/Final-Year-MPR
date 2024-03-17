import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getJobs } from "../utils/backend";
import { useNavigate } from "react-router";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getJobs();
      console.log(res);
      setJobs(res);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-2 gap-10 py-10 px-48">
        {jobs.map((job) => (
          <button
            onClick={() => {
              navigate(`/job`, {
                state: job,
              });
            }}
            className=" w-full items-start bg-white mx-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto"
          >
            <div className="col-span-11 flex flex-col px-10 text-left">
              <h3 aria-label="Company Name" className="text-sm text-gray-600">
                {job.company}
              </h3>
              <a
                aria-label="Job Position"
                className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {job.position}
              </a>
              <p
                aria-label="Job Description"
                className="overflow-hidden pr-7 text-sm"
              >
                {job.desc.slice(0, 200)}...
              </p>
              <div className="mt-3 flex flex-col space-x-2 space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className>
                  Location:
                  <span className=" rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {job.location}
                  </span>
                </div>
                <div className>
                  Date:
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                    {job.date}
                  </span>
                </div>
                <div className="flex space-x-1">
                  Tags:
                  {job.tags.map((tag) => (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                      <span className="mr-1">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
