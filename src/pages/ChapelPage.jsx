import React from 'react';
import { BookOpen, Heart, Users, Handshake, Globe, Sun } from 'lucide-react';

const ChapelPage = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2 flex items-center space-x-2">
        <BookOpen size={32} />
        <span>Chapel & Spiritual Life</span>
      </h2>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        At Pioneer Elite Academy, we believe in nurturing the whole child—mind, body, and spirit. Our spiritual program is designed to foster strong moral values, build character, and inspire a lifelong commitment to service and faith.
      </p>

      {/* Our Core Values Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center space-x-2">
          <Heart size={24} />
          <span>Our Core Values</span>
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <Handshake size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">Integrity</p>
              <p>We guide our students to act with honesty and strong moral principles in all aspects of their lives.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <Users size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">Respect</p>
              <p>We teach the importance of respecting others, regardless of background, and celebrating the diversity of our community.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <Globe size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">Service</p>
              <p>We encourage our students to serve others and make a positive impact on the world around them, guided by compassion and empathy.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Chapel Services Section - Now with detailed programs */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center space-x-2">
          <Sun size={24} />
          <span>Chapel Services & Activities</span>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic">
          "Raise up a child in the Fear Of The Lord and when he/she is older, they won't depart from it."
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The following programs have raised and mentored morally upright, confident, God-fearing learners and alumni of Pioneer Elite Academy over the years.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Fridays Pastoral Programme:</strong> Weekly sessions for spiritual guidance and character formation.</li>
          <li><strong>Sunday School & Sermons:</strong> Engaging lessons and sermons on Sundays to deepen biblical understanding.</li>
          <li><strong>Bible Stories & Songs:</strong> Interactive sessions for our younger learners to connect with foundational stories and hymns.</li>
          <li><strong>Bible Study & Quizzes:</strong> Engaging activities to encourage deep understanding of the scriptures.</li>
          <li><strong>Spiritual Dances:</strong> Programs that allow students to express their faith through movement and art.</li>
        </ul>
      </div>

      {/* Community Outreach Section */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center space-x-2">
          <Handshake size={24} />
          <span>Community and Outreach</span>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our commitment to service extends beyond our campus. Students are encouraged to participate in various outreach programs, including visiting local community centers and participating in fundraising for charitable causes. These activities help students apply their values in a real-world context and develop a sense of social responsibility.
        </p>
      </div>
    </section>
  );
};

export default ChapelPage;
