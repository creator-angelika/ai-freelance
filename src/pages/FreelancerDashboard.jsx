import React, { useState, useEffect } from 'react';
import { getFreelancerById } from '../services/freelancerService'; // Correct import based on your service file

const FreelancerDashboard = () => {
  const [freelancer, setFreelancer] = useState({});

  useEffect(() => {
    // Fetch freelancer profile data (assuming you have a freelancer ID to pass)
    const freelancerId = 1; // Replace this with the actual freelancer ID if needed
    const freelancerData = getFreelancerById(freelancerId); // Use the correct function
    setFreelancer(freelancerData);
  }, []);

  // Hardcoded jobs
  const jobs = [
    {
      title: 'Web Developer for E-Commerce Platform',
      appliedDate: '2024-11-15',
      status: 'Pending',
    },
    {
      title: 'Mobile App Designer for Startups',
      appliedDate: '2024-10-30',
      status: 'Accepted',
    },
    {
      title: 'SEO Specialist for Digital Marketing Agency',
      appliedDate: '2024-12-01',
      status: 'Rejected',
    },
    {
      title: 'Content Writer for Blog Development',
      appliedDate: '2024-09-25',
      status: 'Pending',
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Freelancer Profile Section */}
        <div className="flex items-center space-x-6 mb-8">
          <img
            src={freelancer.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{freelancer.name}</h2>
            <p className="text-gray-600 text-lg">{freelancer.bio}</p>

            {/* Skills */}
            <div className="mt-2">
              <span className="text-gray-500">Skills: </span>
              <span className="font-semibold text-gray-700">{freelancer.skills?.join(', ')}</span>
            </div>

            {/* Location */}
            <div className="mt-2">
              <span className="text-gray-500">Location: </span>
              <span className="font-semibold text-gray-700">{freelancer.location}</span>
            </div>
          </div>
        </div>

        {/* Applied Jobs Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Applied Jobs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4">
                  <h4 className="text-l font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-gray-600 text-sm">Applied: {new Date(job.appliedDate).toLocaleDateString()}</p>
                </div>

                {/* Job Status */}
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    job.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : job.status === 'Accepted'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {job.status}
                </div>

                <div className="mt-4">
                  <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg w-full hover:bg-indigo-600 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No jobs applied yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
