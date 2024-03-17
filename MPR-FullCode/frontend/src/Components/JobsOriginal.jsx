import { useEffect, useState } from "react";
import { applyJob, getJobs } from "../utils/backend";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { confirmAlert } from "react-confirm-alert";


export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [curJobId, setCurJobId] = useState("");
  const [curJob, setCurJob] = useState({});
  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();

      console.log(data);

      setJobs(data);
    };

    fetchJobs();
  }, []);

  const openModal = () => {};

  const handleApply = async (jobId) => {
    const userId = localStorage.getItem("userId");
    setModal(true);

    const res = await applyJob(jobId, userId)
      .then((res) => {
        toast.success("Applied Successfully");
      })
      .catch((err) => {
        toast.error("Error in Applying");
      });

    // alert("Applied Successfully");
  };

  const hasApplied = (applicants) => {
    const userId = localStorage.getItem("userId");
    if (applicants.includes(userId)) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-2 gap-10 py-10 px-48">
        {jobs.map((job) => (
          <button
            tabIndex={0}
            onClick={() => {
              setModal(true);
              setCurJobId(job._id);
              setCurJob(job);
            }}
            className="w-full items-start bg-white mx-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto"
          >
            <div className="col-span-11 flex flex-col px-10 text-left">
              <h3
                tabIndex={0}
                aria-label="Company Name"
                className="text-sm text-gray-600"
              >
                {job.company}
              </h3>
              <a
                tabIndex={0}
                aria-label="Job Position"
                className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {job.position}
              </a>
              <p
                tabIndex={0}
                aria-label="Job Description"
                className="overflow-hidden pr-7 text-sm"
              >
                {job.desc.slice(0, 200)}...
              </p>
              <div className="mt-3 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className>
                  Location:
                  <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {job.location}
                  </span>
                </div>
                <div className>
                  Date:
                  <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                    {job.date}
                  </span>
                </div>
                <div className>
                  Tags:
                  {job.tags.map((tag) => (
                    <span className="ml-2 mr-1 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                      <span className="mr-1">{tag}</span>
                    </span>
                  ))}
                </div>
                <div className>
                  {hasApplied(job.applicants) && (
                    <span className="mr-1 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                      <span className="mr-1">Applied</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}

        {modal && (
          <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white p-4 rounded-md">
              <button
                className="absolute top-0 right-0 p-2 text-gray-500"
                onClick={() => setModal(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-md ">
                <button>
                  <h1 className="text-2xl font-bold">Job Details</h1>
                  <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-xl font-bold text-blue-600">
                      {curJob.company}
                    </h1>
                    <h1 className="text-xl font-bold">{curJob.position}</h1>
                    <p className="text-sm">{curJob.desc}</p>
                    <p className="text-sm">
                      <span className="font-bold">Location:</span>{" "}
                      {curJob.location}
                    </p>
                    <p className="text-sm">
                      <span className="font-bold">Date:</span> {curJob.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {curJob.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
                <div className="mt-3">
                  <button
                    onClick={() => {
                      if (hasApplied(curJob.applicants)) {
                        toast.error("Already Applied");
                        return;
                      }

                      handleApply(curJobId);
                      curJob.applicants.push(localStorage.getItem("userId"));

                      setModal(false);
                    }}
                    aria-label="Apply Button for Job"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}