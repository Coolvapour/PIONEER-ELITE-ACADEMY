import React, { useState } from 'react'; // useState added for internal mobile nav state
import { Link, useLocation } from 'react-router-dom';
import {
  Home as HomeIcon,
  Info,
  Book,
  BookOpen,
  Briefcase,
  Image,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  UserPlus // Added for Admissions
} from 'lucide-react'; // Removed Award icon as Student Life is removed

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Internal state for mobile nav
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'About', icon: Info, path: '/about' },
    { name: 'Management', icon: Briefcase, path: '/management' },
    { name: 'The School', icon: Book, path: '/the-school' },
    { name: 'Chapel', icon: BookOpen, path: '/chapel' },
    { name: 'Photo Gallery', icon: Image, path: '/gallery' },
    { name: 'Contact', icon: Mail, path: '/contact' },
    { name: 'Admissions', icon: UserPlus, path: '/admissions' }, // Admissions
    { name: 'Online Manual', icon: BookOpen, path: '/manual' }, // Online Manual
  ];

  return (
    <header className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://digiskool.co.ke/pioneer-elite/upload/pioneer_logo.jpeg"
            alt="Pioneer Elite Academy Logo"
            className="rounded-full h-10 w-10 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/40x40/ffffff/000000?text=PEA";
            }}
          />
          <h1 className="text-2xl font-bold rounded-md px-2 py-1">
            PIONEER ELITE ACADEMY
          </h1>
        </div>

        {/* Mobile: Theme Toggle + Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-300" />
            ) : (
              <Moon size={24} className="text-blue-200" />
            )}
          </button>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle Navigation"
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-900 ${
                location.pathname === item.path ? 'bg-blue-800' : ''
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-300" />
            ) : (
              <Moon size={24} className="text-blue-200" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu - Side Pop-out */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsNavOpen(false)} // Close when clicking outside
        ></div>
      )}
      <nav
        className={`fixed top-0 right-0 h-full w-64 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-900'} text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsNavOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close Navigation"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsNavOpen(false)} // Close menu on nav
              className={`flex items-center space-x-3 w-full justify-center py-3 px-4 rounded-md transition-colors duration-200 hover:bg-blue-800 ${
                location.pathname === item.path ? 'bg-blue-800' : ''
              }`}
            >
              <item.icon size={22} />
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          ))}
          {/* Theme toggle also in mobile side nav */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-300" />
            ) : (
              <Moon size={24} className="text-blue-200" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
