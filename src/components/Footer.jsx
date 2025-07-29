import React from 'react';
import { ArrowUpCircle } from 'lucide-react'; // Import ArrowUpCircle icon

const Footer = ({ isDarkMode, showScrollToTop, scrollToTop }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white p-6 text-center mt-10 rounded-t-lg shadow-inner relative`}>
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} PIONEER ELITE ACADEMY. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed with <span className="text-red-500">&hearts;</span> for education.</p>
        <p className="mt-2 text-sm">Designed by <a href="https://rimotechnologies.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Rimo Technologies</a></p>
      </div>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={28} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
