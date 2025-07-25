import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Info, Book, UserPlus, Image, Mail, Menu, X, Download, Monitor, Users, Award, Briefcase, Phone, MessageSquare, MapPin, Headset, BookOpen, Smartphone } from 'lucide-react'; // Added Smartphone icon for the app download

// Image and PDF Naming Conventions for your /public/images folder
// Slideshow Images: slideshow1.jpg, slideshow2.jpg, slideshow3.jpg
// Staff Photos: staff_gideon_lagat.jpg, staff_fredrrick_olang.jpg, staff_sharon_kiptoo.jpg
// Co-curricular Images: cocurricular1.jpg, cocurricular2.jpg, cocurricular3.jpg, cocurricular4.jpg
// Alumni Photo: alumni_ruth_jebet_kiplagat.jpg
// Fee Structure PDF: pioneer_elite_fee_structure.pdf

// Background Images (will be applied as inline styles with specific URLs)
const HOME_BG_IMAGE = 'https://www.pexels.com/photo/pile-of-books-433333/';
const ACADEMICS_BG_IMAGE = 'https://www.pexels.com/photo/photography-of-people-graduating-1205651/';
const CONTACT_BG_IMAGE = 'https://www.pexels.com/photo/clear-light-bulb-placed-on-chalkboard-355952/';


// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsNavOpen(false); // Close nav on item click
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage handleNavClick={handleNavClick} />;
      case 'about':
        return <AboutPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'gallery':
        return <GalleryEventsPage />;
      case 'staff':
        return <StaffPage />;
      case 'student-life':
        return <StudentLifePage />;
      case 'contact':
        return <ContactPage />;
      case 'manual': // New case for the online manual
        return <OnlineManualPage />;
      default:
        return <HomePage handleNavClick={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Header setActivePage={handleNavClick} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
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
    { name: 'Staff', icon: Users, page: 'staff' },
    { name: 'Student Life', icon: Award, page: 'student-life' },
    { name: 'Contact', icon: Mail, page: 'contact' },
    { name: 'Online Manual', icon: BookOpen, page: 'manual' }, // New nav item for the manual
  ];

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
              onClick={() => setActivePage(item.page)}
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
                onClick={() => setActivePage(item.page)}
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
        <p className="mt-2 text-sm">Designed by <a href="https://rimotechnologies.vecel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Rimo Technologies</a></p>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = ({ handleNavClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/slideshow1.png", // Updated path
    "/images/slideshow2.png", // Updated path
    "/images/slideshow3.png", // Updated path
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <section
      className="p-8 rounded-lg shadow-md mb-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${HOME_BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 rounded-lg"></div> {/* Overlay for readability */}
      <div className="relative z-10"> {/* Content wrapper */}
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
            <button onClick={() => handleNavClick('admissions')} className="mt-4 inline-block bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors">Learn More</button>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">Calendar</h3>
            <p className="text-gray-600">Stay updated with our academic calendar.</p>
            <button onClick={() => handleNavClick('gallery')} className="mt-4 inline-block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition-colors">View Calendar</button>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Contact Us</h3>
            <p className="text-gray-600">Get in touch with our friendly staff.</p>
            <button onClick={() => handleNavClick('contact')} className="mt-4 inline-block bg-yellow-600 text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition-colors">Contact Now</button>
          </div>
        </div>

        {/* Secondary Navigation Links for Mobile/Home Page */}
        <div className="mt-10 p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Explore Our School</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <button onClick={() => handleNavClick('about')} className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-colors text-center">About Us</button>
            <button onClick={() => handleNavClick('academics')} className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-colors text-center">Academics</button>
            <button onClick={() => handleNavClick('staff')} className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-colors text-center">Our Staff</button>
            <button onClick={() => handleNavClick('student-life')} className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-colors text-center">Student Life</button>
            <button onClick={() => handleNavClick('gallery')} className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-colors text-center">Gallery & Events</button>
            <button onClick={() => handleNavClick('manual')} className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-colors text-center">Online Manual</button>
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
              Access Web Login Portal
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bigbrainzsolutions.digiskoolapp&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-lg shadow-md flex items-center justify-center space-x-2"
            >
              <Smartphone size={20} />
              <span>Download Mobile App</span>
            </a>
            {/* Request Login Credentials section with WhatsApp and Call options */}
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row">
              <p className="text-white text-base sm:text-lg">For web portal credentials or help:</p>
              <a
                href="https://wa.me/254705926417?text=Hi%2C%20I%20need%20help%20with%20my%20login%20credentials%20for%20the%20Online%20School%20Management%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-lg shadow-md flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Help</span>
              </a>
              <a
                href="tel:+254705926417"
                className="inline-block bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors text-lg shadow-md flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Help</span>
              </a>
            </div>
            <p className="text-white text-base sm:text-lg mt-4">Note: The mobile app offers self-service login for parents.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Page Component
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
          <strong>Mission:</strong> To provide Quality Education In Order To Produce Individuals With Desired Knowledge Skills, Values and Attitude To Face The Present And Future Challenges.
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
            <h4 className="text-xl font-medium text-gray-800 mb-2">Infrastructure & Classrooms</h4>
            <ul className="list-disc list-inside">
              <li>No. of Classrooms: 16</li> {/* Updated */}
              <li>No. of Boys' Toilets: 2</li>
              <li>No. of Girls' Toilets: 2</li>
              <li>No. of Teachers' Toilets: 2</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-2">Enrollment & Staff</h4>
            <ul className="list-disc list-inside">
              <li>Total Student Enrollment: 371</li> {/* Updated */}
              <li>Total Teachers: 20</li> {/* Updated */}
            </ul>
          </div>
        </div>
      </div>

      {/* School Motto */}
      <div className="mb-8 p-6 bg-blue-100 rounded-lg shadow-sm text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Motto</h3>
        <p className="text-xl italic font-medium text-gray-800">
          "The Fear Of The Lord For Discipline And Success."
        </p>
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

// Academics Page Component
const AcademicsPage = () => {
  return (
    <section
      className="p-8 rounded-lg shadow-md mb-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${ACADEMICS_BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 rounded-lg"></div> {/* Overlay for readability */}
      <div className="relative z-10"> {/* Content wrapper */}
        <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Academics</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Curriculum</h3>
          <p className="text-gray-700 leading-relaxed">
            PIONEER ELITE ACADEMY follows the CBC System, a comprehensive curriculum designed to provide a strong foundation in core subjects while encouraging critical thinking, creativity, and problem-solving skills. We integrate modern pedagogical approaches with traditional teaching methods to ensure a dynamic and engaging learning experience for all students. Our curriculum is regularly reviewed and updated to align with national educational standards and global best practices.
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

        {/* Section: Best Performers */}
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
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800">David Green</p>
              <p className="text-sm text-gray-600">Top in English, Grade 6</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800">Sarah Brown</p>
              <p className="text-sm text-gray-600">Overall Best, Junior Secondary</p>
            </div>
          </div>
        </div>

        {/* Section: History of School Performance */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-green-800 mb-3 flex items-center space-x-2">
            <Book size={24} className="text-blue-900" />
            <span>History of School Performance</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Pioneer Elite Academy has a proud history of consistent academic performance and improvement. Our students regularly achieve above national averages in key examinations, reflecting the effectiveness of our teaching methodologies and the dedication of our students. We continuously strive for excellence, adapting to new educational trends while maintaining our core values. Detailed performance reports are available upon request from the Academics office.
          </p>
        </div>
      </div>
    </section>
  );
};

// Admissions Page Component
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
            href="https://docs.google.com/forms/d/e/1FAIpQLScNqbHWiut3ub7VrYyeIlZq3K0MnHOfdWxOiycs2a41Py1V_Q/viewform?usp=header" // Updated Google Form link
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
        <p className="text-gray-700 leading-relaxed mb-4">
          Our detailed fee structure, including various payment methods, is available for download below.
        </p>
        <div className="text-center">
          <a
            href="/images/pioneer_elite_fee_structure.pdf" // Updated path
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

// Gallery/Events Page Component
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
                src={`/images/cocurricular${i}.PNG`} // Updated path for co-curricular images
                alt={`School Event ${i}`}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/c7d2fe/3730a3?text=Event+${i}`; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Activity {i}</p>
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

// Staff Page Component
const StaffPage = () => {
  const staffMembers = [
    { name: "Mr Gideon Kiprotich Lagat", title: "Head Teacher", img: "/images/staff_gideon_lagat.PNG" }, // Updated
    { name: "Mr Fredrrick Olang", title: "Deputy Head", img: "/images/staff_fredrrick_olang.PNG" }, // Updated
    { name: "Ms Kiptoo Jepkosgei Sharon", title: "Head of Academics", img: "/images/staff_sharon_kiptoo.PNG" }, // Updated
  ];

  return (
    <section className="bg-red-50 p-8 rounded-lg shadow-md mb-8">
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

// Student Life Page Component
const StudentLifePage = () => {
  const coCurricularImages = [
    "/images/cocurricular1.PNG", // Updated path
    "/images/cocurricular2.PNG", // Updated path
    "/images/cocurricular3.PNG", // Updated path
    "/images/cocurricular4.PNG", // Updated path
  ];

  return (
    <section className="bg-green-50 p-8 rounded-lg shadow-md mb-8">
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
          Our alumni are a testament to the strong foundation provided by Pioneer Elite Academy. Many have gone on to excel in various fields, becoming leaders, innovators, and positive contributors to society. We are proud of their achievements and maintain strong ties with our alumni network, encouraging them to mentor current students and share their experiences. Many of our esteemed alumni are now thriving in the diaspora, making significant contributions globally.
        </p>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-sm mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/images/alumni_ruth_jebet_kiplagat.PNG" // Updated path
            alt="Ruth Jebet Kiplagat"
            className="rounded-full h-32 w-32 object-cover border-2 border-blue-600 flex-shrink-0"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/e0e0e0/333333?text=Alumni"; }}
          />
          <div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Featured Alumni: Ruth Jebet Kiplagat</h4>
            <p className="text-gray-700 italic">
              Ruth Jebet Kiplagat, the very first student of Pioneer Elite Academy in 2002, has carved a successful career in interior design. Her journey of creativity and innovation began right here, and we are incredibly proud of her accomplishments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Page Component
const ContactPage = () => {
  const contactNumbers = [
    { label: "Administration", numbers: ["+254722496897", "+254722286280"] },
    { label: "Finance Office", numbers: ["+254724016006"] },
    { label: "Academics", numbers: ["+254722496897"] },
    { label: "Contact Center & Help", numbers: ["+254705926417"] },
  ];

  return (
    <section
      className="p-8 rounded-lg shadow-md mb-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${CONTACT_BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 rounded-lg"></div> {/* Overlay for readability */}
      <div className="relative z-10"> {/* Content wrapper */}
        <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Location</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Find us easily using the map below. We are conveniently located at:
              <br /><br />
              <strong>PIONEER ELITE ACADEMY</strong><br />
              P.O Box 4-30101, Ainabkoi<br /> {/* Added postal address */}
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
              {contactNumbers.map((contact, index) => (
                <li key={index}>
                  <span className="font-semibold flex items-center space-x-3">
                    {contact.label === "Administration" && <Phone size={24} className="text-yellow-600" />}
                    {contact.label === "Finance Office" && <Briefcase size={24} className="text-yellow-600" />}
                    {contact.label === "Academics" && <Book size={24} className="text-yellow-600" />}
                    {contact.label === "Contact Center & Help" && <Headset size={24} className="text-yellow-600" />}
                    <span>{contact.label}:</span>
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1 ml-9">
                    {contact.numbers.map((number, numIndex) => (
                      <React.Fragment key={numIndex}>
                        <a href={`tel:${number}`} className="text-blue-600 hover:underline flex items-center space-x-1">
                          <Phone size={18} />
                          <span>{number} (Call)</span>
                        </a>
                        <a href={`https://wa.me/${number}?text=Hi%2C%20I%20need%20help%20from%20Pioneer%20Elite%20Academy.`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline flex items-center space-x-1">
                          <MessageSquare size={18} />
                          <span>{number} (WhatsApp)</span>
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                </li>
              ))}
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
      </div>
    </section>
  );
};

// New Online Manual Component
const OnlineManualPage = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-2">Online Manual</h2>

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <h3>Welcome to the Pioneer Elite Academy Website Manual!</h3>
        <p>
          This manual provides a comprehensive guide to navigating and utilizing the various features of the Pioneer Elite Academy website. Our goal is to make your online experience as smooth and informative as possible.
        </p>

        <h4>1. Navigating the Website</h4>
        <p>
          The website is organized into several key sections, accessible via the navigation bar at the top of every page.
        </p>
        <ul>
          <li><strong>Home:</strong> The landing page, offering a general overview of the school, a slideshow of school life, quick links to important sections, and information about our online management system.</li>
          <li><strong>About:</strong> Learn about our school's vision, mission, history, key statistics (classrooms, enrollment, staff), and a message from the Principal.</li>
          <li><strong>Academics:</strong> Discover our CBC curriculum, subjects offered for Primary and Junior Secondary levels, class levels, recognition of best performers, and the history of school performance.</li>
          <li><strong>Admissions:</strong> Find out how to apply to Pioneer Elite Academy and download our detailed fee structure.</li>
          <li><strong>Gallery/Events:</strong> Explore photos and videos from school events and view our comprehensive event calendar.</li>
          <li><strong>Staff:</strong> Meet our dedicated team of educators and learn more about the school's culture.</li>
          <li><strong>Student Life:</strong> Get insights into student leadership, a wide range of co-curricular activities, and a spotlight on our successful alumni.</li>
          <li><strong>Contact:</strong> Find our location on a map, postal address, email, and various contact numbers for different departments, along with links to our social media pages.</li>
        </ul>

        <h4>2. Online School Management System (OSMS)</h4>
        <p>
          Pioneer Elite Academy utilizes a robust Online School Management System (OSMS) to streamline various school activities. This system provides dedicated portals for parents and students.
        </p>
        <ul>
          <li><strong>Accessing the Web Login Portal:</strong> Click the "Access Web Login Portal" button on the Home page to go to the OSMS web login page.</li>
          <li><strong>Downloading the Mobile App:</strong> For a convenient mobile experience, you can download our official app from the Google Play Store by clicking the "Download Mobile App" button on the Home page.</li>
          <li><strong>Login Credentials (Web Portal):</strong> If you need your login credentials for the *web portal* or assistance with your web account, please contact our help center directly:
            <ul>
              <li><strong>WhatsApp Help:</strong> Click the "WhatsApp Help" button to send a pre-filled message to our support team.</li>
              <li><strong>Call Help:</strong> Click the "Call Help" button to directly call our support team.</li>
            </ul>
            Please note that for security reasons, passwords for the web portal are not sent automatically. Our help center staff will assist you securely.
          </li>
          <li><strong>Login Credentials (Mobile App):</strong> The mobile app offers a self-service login option for parents, allowing for easier access to their accounts.</li>
          <li><strong>Parent Portal:</strong> Parents can view fee balances, check examination results, and receive important termly notifications from the school.</li>
          <li><strong>Student Portal:</strong> Students can access their academic information, class schedules, and other relevant school data.</li>
        </ul>

        <h4>3. Important Information</h4>
        <ul>
          <li><strong>Fee Structure:</strong> The detailed fee structure can be downloaded from the "Admissions" page.</li>
          <li><strong>Google Form for Applications:</strong> New student applications are processed through a secure Google Form, linked on the "Admissions" page.</li>
          <li><strong>Contacting Departments:</strong> For specific inquiries, use the direct call or WhatsApp options listed under "Contact Us" for Administration, Finance, Academics, and General Help.</li>
        </ul>

        <p>
          We hope this manual helps you make the most of the Pioneer Elite Academy website. For any further assistance, please do not hesitate to contact us.
        </p>
      </div>
    </section>
  );
};

export default App;
