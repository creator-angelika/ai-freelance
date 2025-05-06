import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClientDashboard from './pages/ClientDashboard';
import FreelancerDashboard from './pages/FreelancerDashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
