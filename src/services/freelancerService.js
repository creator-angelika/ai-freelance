import freelancersData from '../data/freelancers.json';

export const getFreelancers = () => {
  return freelancersData;
};

export const getFreelancerById = (id) => {
  return freelancersData.find(freelancer => freelancer.id === id);
};
