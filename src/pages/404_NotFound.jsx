import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-12 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
