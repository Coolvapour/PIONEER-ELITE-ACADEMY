import React from 'react';
import { BookOpen } from 'lucide-react';

const ChapelPage = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 text-center">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6 border-b-2 border-blue-200 dark:border-blue-700 pb-2">Chapel & Spiritual Life</h2>
      <div className="flex flex-col items-center justify-center space-y-4">
        <BookOpen size={64} className="text-blue-600 dark:text-blue-400" />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Welcome to the Chapel page! Here you will find information about our spiritual programs, values, and community services. We believe in nurturing not just the mind but also the spirit, fostering a strong moral compass in our students.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Content coming soon! Please check back later for updates on our chapel services, spiritual guidance, and community outreach initiatives.
        </p>
      </div>
    </section>
  );
};

export default ChapelPage;
