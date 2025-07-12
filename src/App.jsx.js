import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Info, Book, UserPlus, Image, Mail, Menu, X, Download, Monitor, Users, Award, Briefcase, Phone, MessageSquare } from 'lucide-react'; // Added Phone and MessageSquare icons

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'gallery':
        return <GalleryEventsPage />;
      case 'staff': // New page
        return <StaffPage />;
      case 'student-life': // New page
        return <StudentLifePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Header setActivePage={setActivePage} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ setActivePage, isNavOpen, setIsNavOpen }) => {
  const navItems = [
    { name: 'Home', icon: HomeIcon, page: 'home' },
    { name: 'About', icon: Info, page: 'about' },
    { name: 'Academics', icon: Book, page: 'academics' },
    { name: 'Admissions', icon: UserPlus, page: 'admissions' },
    { name: 'Gallery/Events', icon: Image, page: 'gallery' },
    { name: 'Staff', icon: Users, page: 'staff' }, // New nav item
    { name: 'Student Life', icon: Award, page: 'student-life' }, // New nav item
    { name: 'Contact', icon: Mail, page: 'contact' },
  ];

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsNavOpen(false); // Close nav on item click
  };

  return (
    <header className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
        <div className="flex items-center space-x-3">
          <img
            src="https://digiskool.co.ke/pioneer-elite/upload/pioneer_logo.jpeg"
            alt="Pioneer Elite Academy Logo"
            className="rounded-full h-10 w-10 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/ffffff/000000?text=PEA"; }}
          />
          <h1 className="text-2xl font-bold rounded-md px-2 py-1">PIONEER ELITE ACADEMY</h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-blue-900 transition-colors duration-200"
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {isNavOpen && (
        <nav className="md:hidden bg-blue-900 pb-4">
          <div className="flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className="flex items-center space-x-3 w-full justify-center py-3 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200"
              >
                <item.icon size={22} />
                <span className="text-lg font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center mt-10 rounded-t-lg shadow-inner">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} PIONEER ELITE ACADEMY. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed with <span className="text-red-500">&hearts;</span> for education.</p>
        <p className="mt-2 text-sm">Designed by Rimo Software Company.</p>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://placehold.co/1200x400/a3d9ff/000000?text=School+Life+1",
    "https://placehold.co/1200x400/b3e0ff/000000?text=School+Life+2",
    "https://placehold.co/1200x400/c3e7ff/000000?text=School+Life+3",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-4xl font-extrabold text-red-800 mb-6 text-center">Welcome to PIONEER ELITE ACADEMY!</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
        PIONEER ELITE ACADEMY is a leading primary and junior secondary school dedicated to fostering a nurturing and stimulating environment where every student can achieve their full potential. We believe in holistic education that balances academic excellence with character development and extracurricular engagement. Join our vibrant community and embark on a journey of discovery, growth, and success!
      </p>

      {/* Image Slideshow */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-10 h-64 sm:h-80 md:h-96">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`School Life ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x400/cccccc/333333?text=Image+Error"; }}
          />
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-150' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Quick Links / Site Summary */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-yellow-50 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-red-800 mb-3">Admissions</h3>
          <p className="text-gray-600">Discover how to join our school family.</p>
          <a href="#" className="mt-4 inline-block bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors">Learn More</a>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
          <h3 className="2xl font-semibold text-green-800 mb-3">Calendar</h3>
          <p className="text-gray-600">Stay updated with our academic calendar.</p>
          <a href="#" className="mt-4 inline-block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition-colors">View Calendar</a>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Contact Us</h3>
          <p className="text-gray-600">Get in touch with our friendly staff.</p>
          <a href="#" className="mt-4 inline-block bg-yellow-600 text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition-colors">Contact Now</a>
        </div>
      </div>

      {/* Online System Section */}
      <div className="mt-10 bg-blue-900 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
          <Monitor size={32} className="text-yellow-400" />
          <span>Our Online School Management System</span>
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Pioneer Elite Academy utilizes a comprehensive online system to manage all school activities, including registration, fees, examinations, accommodations, subject classes, and departments. Parents and students have dedicated portals to view fee balances, check exam results, and receive termly notifications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://digiskool.co.ke/pioneer-elite/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-600 text-blue-950 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-lg shadow-md"
          >
            Access Login Portal
          </a>
          {/* Updated Request Login Credentials section */}
          <a
            href="https://wa.me/254705926417?text=Hi%2C%20I%20need%20help%20with%20my%20login%20credentials%20for%20the%20Online%20School%20Management%20System."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-lg shadow-md flex items-center space-x-2"
          >
            <MessageSquare size={20} />
            <span>WhatsApp Help Center</span>
          </a>
          <a
            href="tel:+254705926417"
            className="inline-block bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors text-lg shadow-md flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Call Help Center</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// About Page Component (No changes from previous version)
const AboutPage = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">About Us</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Vision & Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Vision:</strong> To be a leading educational institution that inspires lifelong learning, critical thinking, and responsible global citizenship.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          <strong>Mission:</strong> To provide a comprehensive and challenging curriculum, foster a supportive community, and empower students to become compassionate, innovative, and successful individuals who contribute positively to society.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">School History</h3>
        <p className="text-gray-700 leading-relaxed">
          PIONEER ELITE ACADEMY is a private, ordinary, day and boarding school offering co-education for boys and girls. Founded in 2002, our school began with a vision to provide quality education in a rapidly growing community. Starting with a small group of dedicated teachers and a handful of students, we have grown steadily over the decades, expanding our facilities and curriculum to meet the evolving needs of our students. Our rich history is built on a foundation of academic rigor, strong community ties, and a commitment to nurturing well-rounded individuals.
        </p>
      </div>

      {/* Section for School Statistics */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">School Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-2">Infrastructure</h4>
            <ul className="list-disc list-inside">
              <li>No. of Classrooms: 9</li>
              <li>No. of Boys' Toilets: 2</li>
              <li>No. of Girls' Toilets: 2</li>
              <li>No. of Teachers' Toilets: 2</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-2">Enrollment & Staff</h4>
            <ul className="list-disc list-inside">
              <li>Total Student Enrollment: 230</li>
              <li>Non-teaching Male Staff: 3</li>
              <li>Non-teaching Female Staff: 2</li>
              <li>Other Male Staff: 7</li>
              <li>Other Female Staff: 3</li>
              <li>Student-Teacher Ratio: 23:1</li>
              <li>Student-Classroom Ratio: 25.6:1</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Message from Principal</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://placehold.co/150x150/e0e0e0/333333?text=Principal"
            alt="Principal"
            className="rounded-full shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/e0e0e0/333333?text=Principal"; }}
          />
          <p className="text-gray-700 leading-relaxed flex-1">
            "Welcome to PIONEER ELITE ACADEMY! As Principal, I am incredibly proud of our dedicated staff, talented students, and supportive parent community. We strive to create an environment where every child feels valued, challenged, and inspired to reach their highest potential. Our commitment to academic excellence, character development, and a vibrant school life ensures that our students are well-prepared for future success. We look forward to partnering with you on your child's educational journey."
            <br /><br />
            <span className="font-semibold">- [Principal's Name], Principal</span>
          </p>
        </div>
      </div>
    </section>
  );
};

// Academics Page Component (Enhanced)
const AcademicsPage = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Academics</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Curriculum</h3>
        <p className="text-gray-700 leading-relaxed">
          PIONEER ELITE ACADEMY follows the 8-4-4 Education System, a comprehensive curriculum designed to provide a strong foundation in core subjects while encouraging critical thinking, creativity, and problem-solving skills. We integrate modern pedagogical approaches with traditional teaching methods to ensure a dynamic and engaging learning experience for all students. Our curriculum is regularly reviewed and updated to align with national educational standards and global best practices.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Subjects Offered</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium text-gray-800 mb-2">Primary School</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>English Language Arts</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art & Craft</li>
              <li>Music</li>
              <li>Physical Education</li>
              <li>Computer Studies</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium text-gray-800 mb-2">Junior Secondary</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>English</li>
              <li>Kiswahili</li>
              <li>Mathematics</li>
              <li>Integrated Science</li>
              <li>History, Geography, CRE</li>
            </ul>
            <h4 className="text-xl font-medium text-gray-800 mt-4 mb-2">Electives/Optional Subjects</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Computer Science</li>
              <li>Technical Subjects (e.g., Agriculture, Home Science)</li>
              <li>Performing Arts</li>
              <li>French/German</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Class Levels</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Early Years (Pre-Kindergarten, Kindergarten)</li>
          <li>Primary School (Grade 1 - Grade 6)</li>
          <li>Junior Secondary School (Grade 7 - Grade 9)</li>
        </ul>
      </div>

      {/* New Section: Best Performers */}
      <div className="mt-8 bg-yellow-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-red-800 mb-3 flex items-center space-x-2">
          <Award size={24} className="text-yellow-700" />
          <span>Recognition of Best Performers</span>
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Pioneer Elite Academy, we celebrate academic excellence and recognize students who consistently achieve outstanding results. Our dedicated programs and supportive environment empower students to reach their full potential.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
            <p className="font-semibold text-gray-800">Jane Doe</p>
            <p className="text-sm text-gray-600">Top in Mathematics, Grade 8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
            <p className="font-semibold text-gray-800">John Smith</p>
            <p className="text-sm text-gray-600">Overall Best, Primary School</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
            <p className="font-semibold text-gray-800">Emily White</p>
            <p className="text-sm text-gray-600">Outstanding in Science, Grade 7</p>
          </div>
        </div>
      </div>

      {/* New Section: History of School Performance */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-green-800 mb-3 flex items-center space-x-2">
          <Book size={24} className="text-blue-900" />
          <span>History of School Performance</span>
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Pioneer Elite Academy has a proud history of consistent academic performance and improvement. Our students regularly achieve above national averages in key examinations, reflecting the effectiveness of our teaching methodologies and the dedication of our students. We continuously strive for excellence, adapting to new educational trends while maintaining our core values. Detailed performance reports are available upon request from the Academics office.
        </p>
      </div>
    </section>
  );
};

// Admissions Page Component (No changes from previous version)
const AdmissionsPage = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Admissions</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">How to Apply</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Interested in joining Pioneer Elite Academy? Please fill out our online application form for consideration. We will review your submission and get back to you with feedback.
        </p>
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors text-lg flex items-center justify-center space-x-2"
          >
            <UserPlus size={20} />
            <span>Apply Now via Google Form</span>
          </a>
        </div>
        <p className="text-gray-700 mt-4 italic text-center">
          For any feedback or inquiries regarding your application, please email us at: <a href="mailto:kipronoleleito594@gmail.com" className="text-blue-600 hover:underline">kipronoleleito594@gmail.com</a>
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Fee Structure</h3>
        <p className="text-700 leading-relaxed mb-4">
          Our detailed fee structure, including various payment methods, is available for download below.
        </p>
        <div className="text-center">
          <a
            href="https://example.com/pioneer_elite_fee_structure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition-colors text-lg flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Fee Structure (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Gallery/Events Page Component (No changes from previous version)
const GalleryEventsPage = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Gallery & Events</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Photos & Videos</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Explore memorable moments from our school events, academic achievements, sports activities, and creative arts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src={`https://placehold.co/400x300/c7d2fe/3730a3?text=Event+${i}`} // Placeholder image
                alt={`School Event ${i}`}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/c7d2fe/3730a3?text=Event+${i}`; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Event Title {i}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="#" className="inline-block bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors text-lg">View More Photos</a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Event Calendar</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stay informed about upcoming school events, holidays, parent-teacher conferences, and important dates.
        </p>
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-yellow-200 text-yellow-800 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">JUL 15</span>
              <div>
                <p className="font-semibold text-gray-800">Parent-Teacher Conference</p>
                <p className="text-sm text-gray-600">9:00 AM - 4:00 PM, School Hall</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-200 text-red-800 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">AUG 01</span>
              <div>
                <p className="font-semibold text-gray-800">New Academic Year Begins</p>
                <p className="text-sm text-gray-600">All students report</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-200 text-yellow-800 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">SEP 10</span>
              <div>
                <p className="font-semibold text-gray-800">Annual Sports Day</p>
                <p className="text-sm text-gray-600">8:00 AM - 1:00 PM, School Field</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-200 text-red-800 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">OCT 20</span>
              <div>
                <p className="font-semibold text-gray-800">Arts & Culture Festival</p>
                <p className="text-sm text-gray-600">6:00 PM, Auditorium</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <a href="#" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-950 transition-colors text-lg">View Full Calendar</a>
        </div>
      </div>
    </section>
  );
};

// Staff Page Component (New)
const StaffPage = () => {
  const staffMembers = [
    { name: "Mr. David Kimani", title: "Head Teacher", img: "https://placehold.co/120x120/a3d9ff/000000?text=Staff+1" },
    { name: "Ms. Sarah Adhiambo", title: "Deputy Head Teacher", img: "https://placehold.co/120x120/b3e0ff/000000?text=Staff+2" },
    { name: "Mr. James Omondi", title: "Head of Academics", img: "https://placehold.co/120x120/c3e7ff/000000?text=Staff+3" },
    { name: "Ms. Grace Wanjiku", title: "Primary Coordinator", img: "https://placehold.co/120x120/d3efff/000000?text=Staff+4" },
    { name: "Mr. Peter Njoroge", title: "Junior Secondary Coordinator", img: "https://placehold.co/120x120/e3f2ff/000000?text=Staff+5" },
    { name: "Ms. Fatuma Ali", title: "Admissions Officer", img: "https://placehold.co/120x120/f3faff/000000?text=Staff+6" },
  ];

  return (
    <section className="bg-red-50 p-8 rounded-lg shadow-md mb-8"> {/* Light red background */}
      <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">Meet Our Staff</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-800 mb-3">Our Dedicated Team</h3>
        <p className="text-gray-700 leading-relaxed">
          At Pioneer Elite Academy, we are incredibly proud of our highly qualified, passionate, and dedicated team of educators and support staff. They are the backbone of our school, committed to nurturing every student's potential and fostering a positive learning environment. Our staff members embody the school's values and work tirelessly to ensure the success and well-being of our students.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-800 mb-3">School Culture</h3>
        <p className="text-gray-700 leading-relaxed">
          Our school culture is built on mutual respect, collaboration, and a shared commitment to excellence. We encourage continuous professional development for our staff, ensuring they are equipped with the latest pedagogical techniques and resources. This vibrant culture extends beyond the classrooms, fostering a supportive community where every individual feels valued and empowered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staffMembers.map((staff, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
            <img
              src={staff.img}
              alt={staff.name}
              className="rounded-full h-24 w-24 object-cover mx-auto mb-4 border-2 border-yellow-600"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/e0e0e0/333333?text=Staff"; }}
            />
            <h4 className="text-xl font-semibold text-blue-900 mb-1">{staff.name}</h4>
            <p className="text-yellow-700 text-sm">{staff.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Student Life Page Component (New)
const StudentLifePage = () => {
  const coCurricularImages = [
    "https://placehold.co/400x300/d3efff/000000?text=Sports+Day",
    "https://placehold.co/400x300/e3f2ff/000000?text=Debate+Club",
    "https://placehold.co/400x300/f3faff/000000?text=Art+Exhibition",
    "https://placehold.co/400x300/c7d2fe/3730a3?text=Music+Concert",
  ];

  return (
    <section className="bg-green-50 p-8 rounded-lg shadow-md mb-8"> {/* Light green background */}
      <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">Student Life at Pioneer Elite Academy</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-800 mb-3">Student Leadership</h3>
        <p className="text-gray-700 leading-relaxed">
          Pioneer Elite Academy believes in nurturing future leaders. Our students are encouraged to take on leadership roles through various platforms, including the Student Council, prefectorial board, and leadership positions within clubs and societies. These roles empower them to develop responsibility, decision-making skills, and a sense of community service. We foster an environment where student voices are heard and valued.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-800 mb-3">Co-Curricular Activities</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond academics, we offer a rich array of co-curricular activities designed to develop students' talents, interests, and social skills. These activities are integral to our holistic education approach, promoting physical well-being, creativity, and teamwork.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coCurricularImages.map((src, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src={src}
                alt={`Co-curricular activity ${index + 1}`}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/cccccc/333333?text=Activity"; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Activity {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Sports (Football, Basketball, Athletics, Volleyball)</li>
          <li>Clubs (Debate, Science, Environmental, Journalism)</li>
          <li>Arts (Drama, Music, Fine Art)</li>
          <li>Community Service & Outreach Programs</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-red-800 mb-3">Alumni History</h3>
        <p className="text-gray-700 leading-relaxed">
          Our alumni are a testament to the strong foundation provided by Pioneer Elite Academy. Many have gone on to excel in various fields, becoming leaders, innovators, and positive contributors to society. We are proud of their achievements and maintain strong ties with our alumni network, encouraging them to mentor current students and share their experiences.
        </p>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-sm mt-4">
          <h4 className="text-xl font-semibold text-blue-900 mb-2">Featured Alumni: Dr. Anya Sharma</h4>
          <p className="text-gray-700 italic">
            Dr. Anya Sharma, a graduate of the class of 20XX, is now a renowned medical researcher contributing significantly to public health initiatives. Her journey began right here at Pioneer Elite Academy, where she developed her passion for science and critical thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Page Component (No changes from previous version)
const ContactPage = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Location</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Find us easily using the map below. We are conveniently located at:
            <br /><br />
            <strong>PIONEER ELITE ACADEMY</strong><br />
            Uasin Gishu County<br />
            Ainabkoi Sub-county<br />
            Kenya
          </p>
          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.800757177756!2d35.52742507586663!3d0.17000536422999368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178097a9b3e9d031%3A0x6c323231b3b82491!2sPioneer%20Elite%20Academy!5e0!3m2!1sen!2ske!4v1752305288698!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Get in Touch</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center space-x-3">
              <Mail size={24} className="text-yellow-600" />
              <span>Email: <a href="mailto:info@pioneerelite.edu" className="text-yellow-600 hover:underline">info@pioneerelite.edu</a></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-yellow-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Administration: <a href="tel:+254722496897" className="text-yellow-600 hover:underline">+254722 496 897</a> / <a href="tel:+254722286280" className="text-yellow-600 hover:underline">+254722 286 280</a></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote text-yellow-600"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              <span>Finance Office: <a href="tel:+254724016006" className="text-yellow-600 hover:underline">+254724 016 006</a></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-yellow-600"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.01 4.907a1 1 0 0 0-1.96 0L2.6 9.084a1 1 0 0 0-.02 1.838l8.416 4.085a1 1 0 0 0 .96 0l8.417-4.085Z"/><path d="M14.5 12.5v5.5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-5.5"/></svg>
              <span>Academics: <a href="tel:+254722496897" className="text-yellow-600 hover:underline">+254722 496 897</a></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset text-yellow-600"><path d="M21 17H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/><path d="M5 17V5a7 7 0 0 1 14 0v12"/></svg>
              <span>Contact Center & Help: <a href="tel:+254705926417" className="text-yellow-600 hover:underline">+254705 926 417</a></span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-900 mt-8 mb-3">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.016 3.657 9.184 8.438 9.878V14.5H7.5V12h2.938V9.5c0-2.92 1.782-4.5 4.368-4.5 1.246 0 2.327.089 2.64.128v2.85h-1.68c-1.32 0-1.578.628-1.578 1.55v1.86h3.136l-.504 2.5H14.5V22c4.781-.694 8.438-4.862 8.438-9.878C22 6.477 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://twitter.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.7 1.1-.7-.7-1.7-1.2-2.8-1.2-2.1 0-3.8 1.7-3.8 3.8 0 .3.03.6.1.9C8.3 9.4 5.5 7.9 3.7 5.1c-.3.5-.4 1-.4 1.6 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.05c0 1.8 1.3 3.3 3 3.6-.3.08-.6.1-.9.1-.2 0-.4 0-.6-.05.5 1.5 1.8 2.6 3.4 2.6-1.3 1-2.9 1.6-4.6 1.6-.3 0-.6 0-.9-.05C4.3 19.3 6.3 20 8.5 20c10.2 0 15.7-8.5 15.7-15.7V4c.7-.5 1.3-1.1 1.8-1.8z"/></svg>
            </a>
            <a href="https://instagram.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A2.8 2.8 0 0 0 5 7.8v8.4c0 1.54.4 2.2 2.8 2.2h8.4c1.54 0 2.2-.4 2.2-2.8V7.8c0-1.54-.4-2.2-2.8-2.2H7.6z"/><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
