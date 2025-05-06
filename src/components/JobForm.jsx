import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      title: jobTitle,
      description,
      status,
      budget: parseFloat(budget),
    };
    onSubmit(newJob);
    setJobTitle('');
    setDescription('');
    setStatus('Open');
    setBudget('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600" htmlFor="title">Job Title</label>
          <input
            id="title"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex justify-between">
          <div>
            <label className="block text-sm font-semibold text-gray-600" htmlFor="status">Status</label>
            <select
              id="status"
              className="p-2 border border-gray-300 rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600" htmlFor="budget">Budget</label>
            <input
              id="budget"
              type="number"
              className="p-3 border border-gray-300 rounded-lg"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="w-full py-3 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
