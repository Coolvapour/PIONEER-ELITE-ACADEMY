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
    "/images/slideshow3.jpg", // Randomly selected image from gallery (placeholder for a new one)
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
    "20th June 2025 – Weekend Challenge",
    "21st June 2025 – Computing & Robotics Fair 2025",
    "21st June 2025 – Careers Day",
    "26th June 2025 – Inter-class Racket Games",
    "26th Jun – 1st July 2025 – Half-term Break",
    "27th Jun 2025 – Mathematics Contest",
    "18th July 2025 – Prayer Day",
    "28th July 2025 – Closing Day",
    "26th August, 2025 – Opening Day",
  ].sort((a, b) => {
    // Simple date parsing for sorting. Assumes format "DDth Month YYYY" or "DDth Mon YYYY"
    const parseDate = (eventString) => {
      const parts = eventString.match(/(\d+)(?:th|st|nd|rd)? (\w+) (\d{4})/);
      if (parts) {
        const [, day, monthStr, year] = parts;
        const monthIndex = new Date(Date.parse(monthStr + " 1, 2000")).getMonth(); // Get month index
        return new Date(year, monthIndex, day);
      }
      // Handle ranges like "26th Jun – 1st July 2025" by taking the first date
      const rangeParts = eventString.match(/(\d+)(?:th|st|nd|rd)? (\w+) – (\d+)(?:th|st|nd|rd)? (\w+) (\d{4})/);
      if (rangeParts) {
        const [, day1, monthStr1, , , year] = rangeParts;
        const monthIndex1 = new Date(Date.parse(monthStr1 + " 1, 2000")).getMonth();
        return new Date(year, monthIndex1, day1);
      }
      return new Date(0); // Fallback for unparseable dates
    };

    const dateA = parseDate(a);
    const dateB = parseDate(b);
    return dateA - dateB;
  });


  const clubsAndSocieties = [
    { name: "ICT CLUB", description: "Brings together students who have shown interest in computers are guided to understand it even better." },
    { name: "ST. JOHN'S AMBULANCE", description: "This society trains to save a life at all times especially the first critical minutes before medics arrive." },
    { name: "MODEL UNITED NATIONS", description: "Students are taught to understand current affairs, the people and the world." },
    { name: "INTERACT CLUB", description: "The students are enlightened on interactions and discuss matters concerning them day to day." },
    { name: "SCOUTS", description: "Develops leadership, outdoor skills, and community service values." },
    { name: "JOURNALISM CLUB", description: "Fosters writing, reporting, and media literacy skills through school publications." },
    { name: "CHESS CLUB", description: "Enhances strategic thinking, problem-solving, and concentration through the game of chess." },
    { name: "DEBATE CLUB", description: "Improves public speaking, critical thinking, and persuasive argumentation." },
    { name: "ENVIRONMENTAL CLUB", description: "Promotes environmental awareness and sustainability through various initiatives." },
  ];

  const coreValues = [
    "PROFESSIONALISM",
    "HARDWORK",
    "HAPPINESS",
    "RESPONSIBILITY",
    "TEAMWORK",
    "INTEGRITY",
    "HUMILITY",
    "FEAR OF GOD",
    "CARE FOR THE ENVIRONMENT",
    "CLEANLINESS"
  ];

  // Function to handle navigation using useNavigate
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top of the page on navigation
  };

  return (
    <section className="relative z-10"> {/* Ensure content is above the main App.jsx background overlay */}

      {/* Top Contact Info Bar - Mimicking Alliance High School's top bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 rounded-t-lg mb-4 flex flex-col sm:flex-row justify-between items-center shadow-md">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <span className="flex items-center"><Mail size={16} className="mr-1" /> info@pioneerelite.edu</span>
          <span className="flex items-center"><Phone size={16} className="mr-1" /> 0722496897</span>
          <span className="flex items-center"><Phone size={16} className="mr-1" /> 0705926417</span>
        </div>
        <div className="flex space-x-3">
          <a href="https://facebook.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Facebook size={20} /></a>
          <a href="https://twitter.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><X size={20} /></a> {/* Changed Twitter icon to X */}
          <a href="https://instagram.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Instagram size={20} /></a> {/* Added Instagram icon */}
          <a href="https://youtube.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Youtube size={20} /></a>
        </div>
      </div>

      {/* Main Welcome Section & Slideshow */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-4xl font-extrabold text-red-800 dark:text-red-400 mb-6 text-center">Welcome to PIONEER ELITE ACADEMY!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
          PIONEER ELITE ACADEMY is a leading primary and junior secondary school dedicated to fostering a nurturing and stimulating environment where every student can achieve their full potential. We believe in holistic education that balances academic excellence with character development and extracurricular engagement. Join our vibrant community and embark on a journey of discovery, growth, and success!
        </p>

        {/* Image Slideshow */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-10 h-80 sm:h-96 md:h-[500px] lg:h-[600px]">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`School Life ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x600/cccccc/333333?text=Image+Error"; }}
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
      </div>

      {/* UPCOMING TERM 2 2025 Events */}
      <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6 text-center">UPCOMING TERM 2 2025 Events</h3>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

      {/* Get to Know More / School Prayer / Mission / Brief History */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 text-center">Get to Know More</h3>
        <div className="text-center mb-8">
          {/* Replaced "STRONG TO SERVE" with School Motto */}
          <p className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">Our School Motto</p>
          <p className="text-2xl font-bold text-red-700 dark:text-red-400">"The Fear Of The Lord For Discipline And Success."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">School Prayer</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Have in Thy Keeping, O Lord, Our God, This School, That Its work May be Thorough And its life Joyful. That from it may Go Out, Strong in body mind and Character, children who in thy name and power, will serve their fellows faithfully, Through Jesus Christ our Lord. Amen."
            </p>

            <h4 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mt-6 mb-3">School Anthem</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Oh God bless our Great Pioneer<br/>
              with humility before your throne<br/>
              we stand give us strength and wisdom<br/>
              to heed to your call rise and shine<br/>
              oh Pioneer<br/>
              <br/>
              Great Pioneer, Great Pioneer our<br/>
              motto The fear of the Lord for discipline<br/>
              and success, unity and tenacity in<br/>
              with excellence we shine<br/>
              <br/>
              Day by day in structure we grow<br/>
              skill and attitude and knowledge<br/>
              to embrace a responsible a dutiful<br/>
              citizen for our nation to succeed<br/>
              Great Pioneer, Great Pioneer our motto<br/>
              The fear of the Lord for discipline and<br/>
              success with unity and tenacity we<br/>
              excellence we shine."
            </p>

            <h4 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mt-6 mb-3">OUR MISSION</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide Quality Education In Order To Produce Individuals With Desired Knowledge Skills, Values and Attitude To Face The Present And Future Challenges.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">WHO we are</h4>
            <h5 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">BRIEF HISTORY OF THE SCHOOL</h5>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              PIONEER ELITE ACADEMY is a private, comprehensive, day and boarding school offering co-education for boys and girls. Founded in 2002, our school began with a vision to provide quality education in a rapidly growing community. Starting with a small group of dedicated teachers and a handful of students, we have grown steadily over the decades, expanding our facilities and curriculum to meet the evolving needs of our students. Our rich history is built on a foundation of academic rigor, strong community ties, and a commitment to nurturing well-rounded individuals.
            </p>
            <button onClick={() => navigate('/about')} className="mt-4 inline-block bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">MORE</button>
          </div>
        </div>
      </div>

      {/* Academic Excellence, Board of Management, PTA, Students */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Academic Excellence Section */}
        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg shadow-sm text-center">
          <GraduationCap size={48} className="mx-auto mb-4 text-yellow-700 dark:text-yellow-300" />
          <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3">Academic Excellence</h3>
          <p className="text-gray-600 dark:text-gray-300">
            The School has established itself as an academic Giant since the start of CBC. It has remained at the top since.
          </p>
          <button onClick={() => navigate('/the-school')} className="mt-4 inline-block bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors">Learn More</button>
        </div>

        {/* Board of Management Section */}
        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-sm text-center">
          <Briefcase size={48} className="mx-auto mb-4 text-green-700 dark:text-green-300" />
          <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-3">Board of Management</h3>
          <p className="text-gray-600 dark:text-gray-300">
            The board led by our esteemed Chairman is the backbone of the school's governance.
          </p>
          <button onClick={() => navigate('/management')} className="mt-4 inline-block bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">Learn More</button>
        </div>

        {/* The PTA Section */}
        <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg shadow-sm text-center">
          <Users size={48} className="mx-auto mb-4 text-red-700 dark:text-red-300" />
          <h3 className="2xl font-semibold text-yellow-700 dark:text-yellow-400 mb-3">THE PTA</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Parents Association led by our dedicated PTA Chairman brings together parents of our school community.
          </p>
          <button onClick={() => navigate('/contact')} className="mt-4 inline-block bg-yellow-600 text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition-colors">Learn More</button>
        </div>

        {/* Students Section */}
        <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg shadow-sm text-center">
          <Users size={48} className="mx-auto mb-4 text-purple-700 dark:text-purple-300" />
          <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">STUDENTS</h3>
          <p className="text-gray-600 dark:text-gray-300">
            The school has students who have excelled from various primary schools across the country.
          </p>
          <button onClick={() => navigate('/the-school')} className="mt-4 inline-block bg-purple-700 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition-colors">Learn More</button>
        </div>

        {/* Removed FORM 1 ADMISSION tab as requested */}
      </div>

      {/* Societies & Clubs */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 text-center">SOCIETIES & CLUBS at PEA</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
          ACTIVITIES OUTSIDE THE ACADEMICS THAT STUDENTS ARE INVOLVED IN
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubsAndSocieties.map((club, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">{club.name}</h4>
              <p className="text-gray-700 dark:text-gray-300">{club.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button onClick={() => navigate('/the-school')} className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-950 transition-colors text-lg">All Clubs and Societies</button>
        </div>
      </div>

      {/* Calendar of Events */}
      <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6 text-center">CALENDAR OF EVENTS</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
          Stay up to date with school events. The school activities as per the school calendar for term 2 2023.
        </p>
        <div className="text-center">
          <button onClick={() => navigate('/gallery')} className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-950 transition-colors text-lg">All Events</button>
        </div>
      </div>

      {/* Online School Management System Section */}
      <div className="mt-10 bg-blue-900 dark:bg-gray-950 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3 text-yellow-400 dark:text-yellow-300">
          <Monitor size={32} className="text-yellow-400 dark:text-yellow-300" />
          <span>Our Online School Management System</span>
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6 text-gray-100 dark:text-gray-300">
          Pioneer Elite Academy utilizes a comprehensive online system to manage all school activities, including registration, fees, examinations, accommodations, subject classes, and departments. Parents and students have dedicated portals to view fee balances, check exam results, and receive termly notifications.
        </p>
        {/* Access and Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 flex-wrap">
          <a
            href="https://digiskool.co.ke/pioneer-elite/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-600 text-blue-950 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-lg shadow-md w-full sm:w-auto"
          >
            Access Web Login Portal
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bigbrainzsolutions.digiskoolapp&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-lg shadow-md flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <Smartphone size={20} />
            <span>Download Mobile App</span>
          </a>
        </div>
        {/* Help and Instruction */}
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center items-center flex-wrap">
          <p className="text-white dark:text-gray-300 text-base sm:text-lg w-full sm:w-auto">For web portal credentials or help:</p>
          <a
            href="https://wa.me/254705926417?text=Hi%2C%20I%20need%20help%20with%20my%20login%20credentials%20for%20the%20Online%20School%20Management%20System."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-lg shadow-md flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <MessageSquare size={20} />
            <span>WhatsApp Help</span>
          </a>
          <a
            href="tel:+254705926417"
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors text-lg shadow-md flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <Phone size={20} />
            <span>Call Help</span>
          </a>
        </div>
        <p className="text-white dark:text-gray-300 text-base sm:text-lg mt-4">Note: The mobile app offers self-service login for parents.</p>
      </div>

      {/* Other Key Sections (School Routine, Alumni Network, School Values) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> {/* Adjusted grid-cols to 3 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">School Routine</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Our structured school routine ensures a balanced day for students, encompassing academics, co-curricular activities, meal times, and dedicated study periods. It's designed to foster discipline and productivity.
          </p>
          {/* School Routine button links to the-school page */}
          <button onClick={() => navigate('/the-school')} className="mt-4 inline-block bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors">More</button>
        </div>

        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Alumni Network</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Our alumni are a testament to the strong foundation provided by Pioneer Elite Academy. Many have gone on to excel in various fields, becoming leaders, innovators, and positive contributors to society. We are proud of their achievements and maintain strong ties with our alumni network, encouraging them to mentor current students and share their experiences. Many of our esteemed alumni are now thriving in the diaspora, making significant contributions globally.
          </p>
          {/* Alumni Network button links to photo-gallery page */}
          <button onClick={() => navigate('/gallery')} className="mt-4 inline-block bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors">More</button>
        </div>

        {/* School Values Section - Updated with extracted values */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">School Values</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {coreValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          {/* School Values button links to the-school page */}
          <button onClick={() => navigate('/the-school')} className="mt-4 inline-block bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors">More</button>
        </div>
        {/* New button for Best Performers */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Best Performers</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Celebrate our top-performing students across various grades and subjects.
          </p>
          <button onClick={() => navigate('/the-school#best-performers-section')} className="mt-4 inline-block bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">View Performers</button>
        </div>
      </div>

      {/* Removed Support a Student Section as requested */}
      {/*
      <div className="bg-yellow-50 dark:bg-yellow-900 p-8 rounded-lg shadow-md mb-8 text-center">
        <h3 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-4">Support a Student</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
          Pioneer Elite Academy admits bright students from across the country. Over 60% of these students are unable to meet their fees obligations. You can participate by sponsoring a student through paying their fees, buying them usable items, or assisting with transport back home.
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

    </section>
  );
};

export default HomePage;
