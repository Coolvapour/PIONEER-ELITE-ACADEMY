import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';

// This component is displayed when a user navigates to a non-existent page.
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8">
      <Frown size={80} className="text-red-500 mb-6 animate-pulse" />
      <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
