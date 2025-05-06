import React, { useEffect, useState } from 'react';
import { getJobs } from '../services/jobService';
import JobForm from '../components/JobForm';

const ClientDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetching the jobs data from the service
    setJobs(getJobs());
  }, []);

  const handleNewJobSubmit = (newJob) => {
    // In a real scenario, you would send this data to a backend to store
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Client Dashboard</h1>

      <div className="bg-white p-8 rounded-lg shadow-xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Job Listings</h2>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div key={job.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 text-sm">Posted 2 days ago</p>
              </div>

              {/* Job Status */}
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${job.status === 'Open' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {job.status}
              </div>

              <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post New Job Form */}
      <JobForm onSubmit={handleNewJobSubmit} />
    </div>
  );
};

export default ClientDashboard;
