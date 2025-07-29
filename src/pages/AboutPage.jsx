import React from 'react';
import { Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">About Us</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Vision & Mission</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Vision:</strong> To be a leading educational institution that inspires lifelong learning, critical thinking, and responsible global citizenship.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          <strong>Mission:</strong> To provide Quality Education In Order To Produce Individuals With Desired Knowledge Skills, Values and Attitude To Face The Present And Future Challenges.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">School History</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          PIONEER ELITE ACADEMY is a private, ordinary, day and boarding school offering co-education for boys and girls. Founded in 2002, our school began with a vision to provide quality education in a rapidly growing community. Starting with a small group of dedicated teachers and a handful of students, we have grown steadily over the decades, expanding our facilities and curriculum to meet the evolving needs of our students. Our rich history is built on a foundation of academic rigor, strong community ties, and a commitment to nurturing well-rounded individuals.
        </p>
      </div>

      {/* Section for School Statistics */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">School Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
          <div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Infrastructure & Classrooms</h4>
            <ul className="list-disc list-inside">
              <li>No. of Classrooms: 16</li>
              <li>No. of Boys' Toilets: 2</li>
              <li>No. of Girls' Toilets: 2</li>
              <li>No. of Teachers' Toilets: 2</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Enrollment & Staff</h4>
            <ul className="list-disc list-inside">
              <li>Total Student Enrollment: 371</li>
              <li>Total Teachers: 20</li>
            </ul>
          </div>
        </div>
      </div>

      {/* School Motto */}
      <div className="mb-8 p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-sm text-center">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Our Motto</h3>
        <p className="text-xl italic font-medium text-gray-800 dark:text-gray-200">
          "The Fear Of The Lord For Discipline And Success."
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Message from Principal</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://placehold.co/150x150/e0e0e0/333333?text=Principal"
            alt="Principal"
            className="rounded-full shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/e0e0e0/333333?text=Principal"; }}
          />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
            "Welcome to PIONEER ELITE ACADEMY! As Principal, I am incredibly proud of our dedicated staff, talented students, and supportive parent community. We strive to create an environment where every child feels valued, challenged, and inspired to reach their highest potential. Our commitment to academic excellence, character development, and a vibrant school life ensures that our students are well-prepared for future success. We look forward to partnering with you on your child's educational journey."
            <br /><br />
            <span className="font-semibold">- [Principal's Name], Principal</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
