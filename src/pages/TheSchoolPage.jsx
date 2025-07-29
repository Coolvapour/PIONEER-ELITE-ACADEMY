import React, { useEffect } from 'react'; // Import useEffect
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Award, Book } from 'lucide-react';

// Changed to a placeholder image URL for direct image loading
const ACADEMICS_BG_IMAGE = 'https://placehold.co/1920x1080/ADD8E6/000000?text=Academics+Background';

const TheSchoolPage = () => {
  const location = useLocation(); // Initialize useLocation hook

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #best-performers-section)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove '#'
      if (element) {
        // Use setTimeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure rendering
      }
    } else {
      // If no hash, scroll to top of the page when navigating to /the-school
      window.scrollTo(0, 0);
    }
  }, [location]); // Re-run effect when location changes

  const coCurricularImages = [
    "/images/cocurricular1.PNG",
    "/images/cocurricular2.PNG",
    "/images/cocurricular3.PNG",
    "/images/cocurricular4.PNG",
  ];

  return (
    <section
      className="p-8 rounded-lg shadow-md mb-8 relative overflow-hidden bg-white dark:bg-gray-800 min-h-screen" // Added min-h-screen
      style={{
        backgroundImage: `url(${ACADEMICS_BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 rounded-lg"></div> {/* Overlay for readability, adjusted opacity */}
      <div className="relative z-10"> {/* Content wrapper */}
        <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">The School: Academics & Student Life</h2>

        {/* Academics Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Curriculum</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            PIONEER ELITE ACADEMY follows the CBC System, a comprehensive curriculum designed to provide a strong foundation in core subjects while encouraging critical thinking, creativity, and problem-solving skills. We integrate modern pedagogical approaches with traditional teaching methods to ensure a dynamic and engaging learning experience for all students. Our curriculum is regularly reviewed and updated to align with national educational standards and global best practices.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Subjects Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Primary School</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
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
            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4 mb-2">Electives/Optional Subjects</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Computer Science</li>
                <li>Technical Subjects (e.g., Agriculture, Home Science)</li>
                <li>Performing Arts</li>
                <li>French/German</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Class Levels</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Early Years (Pre-Kindergarten, Kindergarten)</li>
            <li>Primary School (Grade 1 - Grade 6)</li>
            <li>Junior Secondary School (Grade 7 - Grade 9)</li>
          </ul>
        </div>

        {/* Section: Best Performers */}
        <div id="best-performers-section" className="mt-8 bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3 flex items-center space-x-2">
            <Award size={24} className="text-yellow-700 dark:text-yellow-300" />
            <span>Recognition of Best Performers</span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At Pioneer Elite Academy, we celebrate academic excellence and recognize students who consistently achieve outstanding results. Our dedicated programs and supportive environment empower students to reach their full potential.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Sylvia Jepchumba</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Best Student, Grade 9</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Dismark Kirwa</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Student, Grade 8</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Abijah Jepkoech</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Student, Grade 7</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Sandra Jelagat</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Student, Grade 6</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Sheryl Chepkorir</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Student, Grade 5</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <img src="https://placehold.co/80x80/ffd700/000000?text=Student" alt="Top Student" className="rounded-full mx-auto mb-2" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/ffd700/000000?text=Student"; }} />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Joy Jruto</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Best in Math, Junior Secondary (Grade 9)</p>
            </div>
          </div>
        </div>

        {/* Section: History of School Performance */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-sm">
          <h3 className="2xl font-semibold text-green-800 dark:text-green-400 mb-3 flex items-center space-x-2">
            <Book size={24} className="text-blue-900 dark:text-blue-300" />
            <span>History of School Performance</span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Pioneer Elite Academy has a proud history of consistent academic performance and improvement. Our students regularly achieve above national averages in key examinations, reflecting the effectiveness of our teaching methodologies and the dedication of our students. We continuously strive for excellence, adapting to new educational trends while maintaining our core values. Detailed performance reports are available upon request from the Academics office.
          </p>
        </div>

        {/* Student Life Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6 border-b-2 border-blue-200 dark:border-blue-700 pb-2">Student Life</h3>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3">Student Leadership</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Pioneer Elite Academy believes in nurturing future leaders. Our students are encouraged to take on leadership roles through various platforms, including the Student Council, prefectorial board, and leadership positions within clubs and societies. These roles empower them to develop responsibility, decision-making skills, and a sense of community service. We foster an environment where student voices are heard and valued.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3">Co-Curricular Activities</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
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
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-4">
              <li>Sports (Football, Basketball, Athletics, Volleyball)</li>
              <li>Clubs (Debate, Science, Environmental, Journalism)</li>
              <li>Arts (Drama, Music, Fine Art)</li>
              <li>Community Service & Outreach Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSchoolPage;
