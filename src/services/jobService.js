import jobsData from '../data/jobs.json';

export const getJobs = () => {
  // Simulate fetching data (in a real-world scenario, this could be an API call)
  return jobsData;
};

export const getJobById = (id) => {
  return jobsData.find(job => job.id === id);
};
