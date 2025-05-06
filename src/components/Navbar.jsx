import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
      {/* Navbar logo / heading */}
      <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-all duration-300 ease-in-out">
        Freelance Marketplace
      </Link>

      {/* Navbar links */}
      <div className="space-x-6">
        <Link
          to="/client-dashboard"
          className="text-lg hover:text-gray-300 transition-all duration-300 ease-in-out"
        >
          Client Dashboard
        </Link>
        <Link
          to="/freelancer-dashboard"
          className="text-lg hover:text-gray-300 transition-all duration-300 ease-in-out"
        >
          Freelancer Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
