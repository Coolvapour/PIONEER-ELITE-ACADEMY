import React from 'react';
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
  BookOpenCheck, // New icon for Online Library
} from 'lucide-react';

const Header = ({ isNavOpen, setIsNavOpen, toggleTheme, isDarkMode }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'About', icon: Info, path: '/about' },
    { name: 'Management', icon: Briefcase, path: '/management' },
    { name: 'The School', icon: Book, path: '/school' },
    { name: 'Chapel', icon: BookOpen, path: '/chapel' },
    { name: 'Photo Gallery', icon: Image, path: '/gallery' },
    { name: 'Contact', icon: Mail, path: '/contact' },
    // New item for the external link
    { name: 'Online Library', icon: BookOpenCheck, url: 'https://pioneerelite.snapplify.com/' },
  ];

  return (
    <header className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://digischool.co.ke/wp-content/uploads/2023/12/Pioneer-elite-Academy.jpg"
            alt="Pioneer Elite Academy Logo"
            className="h-12 w-12 rounded-full border-2 border-yellow-400 object-cover"
          />
          <span className="text-xl font-bold tracking-tight hidden md:block">
            Pioneer Elite Academy
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            // Conditional rendering for internal vs external links
            item.path ? (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-200 hover:bg-blue-800`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </a>
            )
          ))}
          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-400" />
            ) : (
              <Moon size={24} className="text-white" />
            )}
          </button>
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-400" />
            ) : (
              <Moon size={24} className="text-white" />
            )}
          </button>
          <button
            onClick={() => setIsNavOpen(true)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open Navigation"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation (Slide-in) */}
        <div
          className={`fixed inset-y-0 right-0 z-50 bg-blue-950 w-64 transform transition-transform duration-300 ease-in-out ${
            isNavOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden flex flex-col shadow-lg`}
        >
          <div className="flex justify-between items-center p-4 border-b border-blue-800">
            <span className="text-xl font-bold">Navigation</span>
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
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsNavOpen(false)}
                  className={`flex items-center space-x-3 w-full justify-center py-3 px-4 rounded-md transition-colors duration-200 hover:bg-blue-800 ${
                    location.pathname === item.path ? 'bg-blue-800' : ''
                  }`}
                >
                  <item.icon size={22} />
                  <span className="text-lg font-medium">{item.name}</span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsNavOpen(false)}
                  className={`flex items-center space-x-3 w-full justify-center py-3 px-4 rounded-md transition-colors duration-200 hover:bg-blue-800`}
                >
                  <item.icon size={22} />
                  <span className="text-lg font-medium">{item.name}</span>
                </a>
              )
            ))}
            {/* Theme toggle also in mobile side nav */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
