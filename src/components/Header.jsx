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
  Library,
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
  ];

  return (
    <header className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://digital-stage.vercel.app/images/logo-placeholder.png"
            alt="Pioneer Elite Academy Logo"
            className="h-10 md:h-12 w-auto"
          />
          <span className="text-xl md:text-2xl font-bold font-inter hidden sm:inline">PIONEER ELITE ACADEMY</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-800 ${
                location.pathname === item.path ? 'bg-blue-800 font-semibold' : ''
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
          {/* External link for Online Library */}
          <a
            href="https://my.snapplify.com/store/all/books"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-yellow-600 bg-yellow-500 text-blue-950"
          >
            <Library size={20} />
            <span className="text-sm font-semibold">Online Library</span>
          </a>
        </nav>

        {/* Desktop Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 hidden md:block"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-400" />
            ) : (
              <Moon size={24} className="text-blue-200" />
            )}
          </button>
          <button
            onClick={() => setIsNavOpen(true)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden"
            aria-label="Open Navigation"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 shadow-lg transform transition-transform duration-300 z-[60] ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-700">
          <h3 className="text-xl font-bold">Menu</h3>
          <button
            onClick={() => setIsNavOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close Navigation"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-start space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsNavOpen(false)} // Close menu on nav
              className={`flex items-center space-x-3 w-full py-3 px-4 rounded-md transition-colors duration-200 hover:bg-blue-800 ${
                location.pathname === item.path ? 'bg-blue-800' : ''
              }`}
            >
              <item.icon size={22} />
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          ))}
          {/* External link for Online Library in mobile menu */}
          <a
            href="https://my.snapplify.com/store/all/books"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsNavOpen(false)}
            className="flex items-center space-x-3 w-full py-3 px-4 rounded-md transition-colors duration-200 hover:bg-yellow-600 bg-yellow-500 text-blue-950"
          >
            <Library size={22} />
            <span className="text-lg font-medium">Online Library</span>
          </a>
          {/* Theme toggle in mobile side nav */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 w-full py-3 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-400" />
            ) : (
              <Moon size={24} className="text-blue-200" />
            )}
            <span className="text-lg font-medium">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
