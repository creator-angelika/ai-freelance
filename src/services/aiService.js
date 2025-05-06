// aiServices.js

// Sample data for freelancers and jobs
const freelancerData = {
    1: {
      name: 'John Doe',
      skills: ['React', 'Node.js', 'JavaScript'],
      location: 'New York',
    },
    2: {
      name: 'Jane Smith',
      skills: ['Python', 'Django', 'Machine Learning'],
      location: 'San Francisco',
    },
  };
  
  const jobsData = [
    {
      jobId: 1,
      title: 'Frontend Developer',
      requiredSkills: ['React', 'JavaScript'],
      location: 'New York',
      status: 'open',
    },
    {
      jobId: 2,
      title: 'Backend Developer',
      requiredSkills: ['Node.js', 'Express', 'MongoDB'],
      location: 'San Francisco',
      status: 'open',
    },
    {
      jobId: 3,
      title: 'Data Scientist',
      requiredSkills: ['Python', 'Machine Learning', 'Django'],
      location: 'San Francisco',
      status: 'open',
    },
  ];
  
  // Function to match freelancer skills with job requirements
  export const matchFreelancerWithJob = (freelancerId) => {
    const freelancer = freelancerData[freelancerId];
  
    if (!freelancer) {
      return [];
    }
  
    // Filter jobs that match freelancer skills
    const matchedJobs = jobsData.filter((job) =>
      job.requiredSkills.every((skill) => freelancer.skills.includes(skill))
    );
  
    return matchedJobs;
  };
  
  // Function to suggest jobs based on the freelancer's location
  export const suggestJobsByLocation = (freelancerId) => {
    const freelancer = freelancerData[freelancerId];
  
    if (!freelancer) {
      return [];
    }
  
    // Suggest jobs that match freelancer's location
    const locationMatchedJobs = jobsData.filter((job) => job.location === freelancer.location);
  
    return locationMatchedJobs;
  };
  
  // Function to recommend jobs based on freelancer skills
  export const recommendJobsBySkills = (skills) => {
    // Recommend jobs based on matching skills
    const recommendedJobs = jobsData.filter((job) =>
      job.requiredSkills.some((skill) => skills.includes(skill))
    );
  
    return recommendedJobs;
  };
  
  // Function to prioritize jobs based on relevance (simple scoring system)
  export const prioritizeJobs = (freelancerId) => {
    const freelancer = freelancerData[freelancerId];
  
    if (!freelancer) {
      return [];
    }
  
    // Prioritize jobs based on the number of matching skills
    const prioritizedJobs = jobsData
      .map((job) => {
        const matchCount = job.requiredSkills.filter((skill) =>
          freelancer.skills.includes(skill)
        ).length;
  
        return { ...job, matchCount };
      })
      .sort((a, b) => b.matchCount - a.matchCount); // Sort by match count
  
    return prioritizedJobs;
  };
  