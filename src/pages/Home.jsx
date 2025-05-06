import React, { useState, useEffect, useCallback } from 'react';
import freelancers from '../data/freelancers.json'; // Import freelancers data
import jobs from '../data/jobs.json'; // Import jobs data

const Home = () => {
  const [matchedFreelancers, setMatchedFreelancers] = useState([]);
  const [showFreelancers, setShowFreelancers] = useState(false); // Toggle freelancer grid visibility

  // Function to match freelancer with jobs
  const matchJobsForFreelancer = (freelancer) => {
    const matchingJobs = jobs.filter(job => {
      return job.status === 'Open' && job.description.toLowerCase().includes(freelancer.skill.toLowerCase());
    });
    return matchingJobs;
  };

  // Handle AI job matching for all freelancers, memoized with useCallback
  const handleMatchJobs = useCallback(() => {
    const matchedResults = freelancers.map(freelancer => {
      const matchedJobs = matchJobsForFreelancer(freelancer);
      return {
        ...freelancer,
        matchedJobs,
      };
    });
    setMatchedFreelancers(matchedResults);
  }, []); // Empty dependency array, since no props or state are used inside handleMatchJobs

  // Call the matching function on component mount
  useEffect(() => {
    handleMatchJobs();
  }, [handleMatchJobs]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 px-4 mt-16"> 
      <div className="text-center mb-12 w-full max-w-3xl">
        <h1 className="text-5xl font-semibold text-gray-800 mb-6">Freelancer Marketplace</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find your next project or hire a freelancer with the right skills. Matching you with the best opportunities.
        </p>

        <div className="space-x-4 mb-8">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out">
            Get Started
          </button>
          <button className="border-2 border-black text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        <button 
          onClick={() => setShowFreelancers(!showFreelancers)} 
          className="bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal-500 transition-all duration-300 ease-in-out"
        >
          {showFreelancers ? 'Hide Freelancers' : 'Show Freelancers'}
        </button>
      </div>

      {showFreelancers && (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {matchedFreelancers.map(freelancer => (
            <div key={freelancer.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <img 
                  src={freelancer.profilePicture} 
                  alt={freelancer.name} 
                  className="w-32 h-32 rounded-full border-2 border-gray-200 shadow-sm"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{freelancer.name}</h3>
              <p className="text-md text-gray-600 mb-4">{freelancer.skill}</p>
              <p className="text-sm text-gray-500">{freelancer.bio}</p>
              <p className="text-sm text-gray-500 mt-2">Location: {freelancer.location}</p>

              {freelancer.matchedJobs.length > 0 ? (
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold text-lg text-gray-800">Matched Jobs:</h4>
                  {freelancer.matchedJobs.map(job => (
                    <div key={job.id} className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition-all duration-200">
                      <h5 className="font-bold text-gray-700">{job.title}</h5>
                      <p className="text-sm text-gray-600">{job.description}</p>
                      <p className="text-sm text-gray-500">Location: {job.location}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-red-500 mt-4">No jobs matched.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
