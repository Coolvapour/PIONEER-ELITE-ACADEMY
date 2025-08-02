import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Monitor, Smartphone, MessageSquare, Phone, Facebook, Twitter, Youtube, Mail, Award, Book, Users, Briefcase, GraduationCap, X, Instagram } from 'lucide-react';

const HomePage = () => { // Removed handleNavClick prop
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const images = [
    "/images/slideshow1.png", // Original first image
    "/images/slideshow2.jpg", // Original second image
    "/images/slideshow3.jpg", // Original third image
    "/images/Snapchat-150000000.jpg", // Randomly selected image from gallery (placeholder for a new one)
    "/images/Snapchat-142410687.jpg", // Image 38 from gallery (index 37 in full gallery list)
    "/images/Snapchat-1344013105.jpg", // Image 34 from gallery (index 33 in full gallery list) - new additional slot
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(slideInterval);
  }, [images.length]);

  const upcomingEvents = [
    "20th June 2025 – Inter-house Athletics",
    "20th July 2025 – Mid-Term Break",
    "5th August 2025 – Visiting Day",
    "1st October 2025 – Final Examination Begin",
    "20th October 2025 – Prize Giving Day & Closing",
  ];

  // Helper function for navigation. Use this for programmatic navigation.
  // const handleNavClick = (path) => {
  //   navigate(path);
  // };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4 md:p-8">

      {/* Hero Section with Image Slideshow */}
      <section className="relative h-[60vh] md:h-[70vh] rounded-lg overflow-hidden shadow-xl mb-12">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`School life slideshow slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/cccccc/333333?text=Image+Not+Found"; }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
            PIONEER ELITE ACADEMY
          </h1>
          <p className="text-lg md:text-2xl text-yellow-300 font-medium mb-6 animate-fadeInUp delay-1s">
            "The Fear Of The Lord For Discipline And Success."
          </p>
          {/*
          <div className="flex space-x-4 animate-fadeInUp delay-2s">
            <button onClick={() => navigate('/about')} className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg">Learn More</button>
            <button onClick={() => navigate('/contact')} className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg">Contact Us</button>
          </div>
          */}
        </div>
      </section>

      {/* Online Library Section - New Section */}
      <div className="bg-blue-800 dark:bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Pioneer Elite Academy Online Library</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Explore our extensive collection of digital textbooks, e-books, and educational resources through our dedicated Snapplify portal.
        </p>
        <a 
          href="https://pioneerelite.snapplify.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-xl transform hover:scale-105"
        >
          Access Our Online Library
        </a>
      </div>

      {/* Upcoming Events Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">Upcoming Events</h2>
        <ul className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">NEW</span>
              <p className="text-lg">{event}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Management System Overview */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">Our Management Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <Monitor size={48} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300">Student & Parent Portal</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Access academic records, fee statements, and school communications through our dedicated online portal.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Smartphone size={48} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300">Mobile App Integration</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Stay connected on the go with our school's mobile application, available for both parents and students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Highlights Section */}
      <section className="bg-blue-50 dark:bg-gray-950 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 text-center mb-6">Pioneer Elite At a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <GraduationCap size={64} className="text-red-600 dark:text-red-400 mb-3" />
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Students</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Users size={64} className="text-green-600 dark:text-green-400 mb-3" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Dedicated Staff</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Book size={64} className="text-yellow-600 dark:text-yellow-400 mb-3" />
            <h3 className="text-3xl font-bold">12</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Classrooms</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Award size={64} className="text-purple-600 dark:text-purple-400 mb-3" />
            <h3 className="text-3xl font-bold">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">In All Fields</p>
          </div>
        </div>
      </section>

      {/*
      <div className="text-center p-8 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
        <p className="mb-4">
          Our support team is ready to assist you.
        </p>
        <button onClick={() => navigate('/contact')} className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-lg shadow-md">Support</button>
      </div>
      */}

      {/* Follow Us on Social Media */}
      <div className="bg-blue-900 dark:bg-gray-950 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-bold mb-4">Follow Us on Social Media</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Be part of the Pioneer Elite community! #PIONEERELITE
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Facebook size={40} /></a>
          <a href="https://twitter.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><X size={40} /></a> {/* Changed Twitter icon to X */}
          <a href="https://instagram.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Instagram size={40} /></a> {/* Added Instagram icon */}
          <a href="https://youtube.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Youtube size={40} /></a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
