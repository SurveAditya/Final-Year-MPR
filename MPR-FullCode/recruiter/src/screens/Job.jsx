import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getUsers } from "../utils/backend";

export default function Job() {
  const location = useLocation();
  const [users, setUsers] = useState([]);

  const job = location.state;

  useEffect(() => {
    console.log(location.state);
    const fetchUsers = async () => {
      // remove duplicate applicants
      const applicants = [...new Set(job.applicants)];

      const data = await getUsers(applicants);
      console.log(data);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative overflow-x-auto sm:rounded-lg w-3/4 mx-auto mt-10">
        <h1 className="text-xl mt-5">
          Applicants for {job.position} @ {job.company}
        </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 shadow-md ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Skills
              </th>
              <th scope="col" className="px-6 py-3">
                Disablity Type
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Notify</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="bg-white border-b   hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.contact}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  {user.skills.map((skill) => (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                      {skill}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4">
                  {user.disabilityType.split("-").join(" ")}
                </td>

                <td className="px-6 py-4 text-right">
                  <a
                    href="https://calendly.com/sainathpoojary/30min"
                    target="_blank"
                    className="font-medium text-blue-600  hover:underline"
                  >
                    Schedule
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
