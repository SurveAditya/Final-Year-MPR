import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import './Jobs.css';

const Jobs = () => {
  const [keyword, setKeyword] = useState('');
  const [jobsInfo, setJobsInfo] = useState([]);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/user/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword
        }),
      });
      const data = await response.json();
      setJobsInfo(data.jobsInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='body-wrap boxed-container margin'>
      <Navbar />
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex">
          <label className="sr-only">Enter your field of interest:</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter your field of interest"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
          />
          <button
            type="submit"
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Submit
          </button>
        </form>
      </div>
      <div>
        {jobsInfo && jobsInfo.map((job) => (
          <MDBCard key={job.id} className="mb-3">
            <MDBCardBody>
              <MDBCardTitle>
                <div className="card-cont">
                  <div className="job-title">{job.jobTitle}</div>
                  <a href={job.url} className="job-url">Click here for the link</a>  
                </div>
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
