import React from 'react';
import { UserPlus, Download, ExternalLink } from 'lucide-react';

const AdmissionsPage = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2 flex items-center space-x-2">
        <UserPlus size={32} />
        <span>Admissions</span>
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Welcome Prospective Students and Parents!</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          At Pioneer Elite Academy, we are excited to welcome new students into our vibrant learning community. Our admissions process is designed to be straightforward and supportive, ensuring a smooth transition for your child. We look for students who are eager to learn, curious, and ready to engage with our holistic educational approach.
        </p>
      </div>

      <div className="mb-8 bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-3 flex items-center space-x-2">
          <Download size={24} />
          <span>Fee Structure</span>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          You can download our detailed fee structure for the current academic year. This document provides a comprehensive breakdown of tuition fees, boarding fees (if applicable), and other charges.
        </p>
        <a
          href="https://example.com/pioneer_elite_academy_fee_structure.pdf" // Placeholder PDF link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-lg shadow-md"
        >
          <Download size={20} className="mr-2" />
          Download Fee Structure (PDF)
        </a>
      </div>

      <div className="mb-8 bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3 flex items-center space-x-2">
          <ExternalLink size={24} />
          <span>Online Application</span>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          We process new student applications through a secure Google Form. Please click the button below to access the application form. Ensure all required fields are filled accurately.
        </p>
        <a
          href="https://forms.gle/yourGoogleFormLinkHere" // Placeholder Google Form link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors text-lg shadow-md"
        >
          <ExternalLink size={20} className="mr-2" />
          Apply Online (Google Form)
        </a>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Admissions Criteria</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Admission to Pioneer Elite Academy is based on a holistic assessment, including academic records, an entrance examination (for certain grades), and an interview. We consider each applicant's potential for growth and their alignment with our school's values.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-4">
          <li>Completed application form</li>
          <li>Previous academic reports</li>
          <li>Birth certificate copy</li>
          <li>Passport-sized photographs</li>
          <li>Successful completion of entrance assessment (where applicable)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Important Dates</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Key dates for admissions for the upcoming academic year:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Application Deadline: November 30th, 2025</li>
          <li>Entrance Exams: December 10th-12th, 2025</li>
          <li>Admission Notifications: January 15th, 2026</li>
        </ul>
      </div>

      <div className="text-center mt-10 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Contact Admissions</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          For any questions regarding the admissions process, please do not hesitate to contact our admissions office.
        </p>
        <p className="text-lg font-medium text-blue-700 dark:text-blue-300 mt-2">
          Email: admissions@pioneerelite.edu | Phone: +254722496897
        </p>
      </div>
    </section>
  );
};

export default AdmissionsPage;
