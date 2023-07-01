import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-6xl font-bold text-gray-800">404</div>
      <p className="text-2xl text-gray-600">Page Not Found</p>
      <p className="text-gray-600">The requested page could not be found.</p>
      <Link to="/" className="mt-4 text-blue-600 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
