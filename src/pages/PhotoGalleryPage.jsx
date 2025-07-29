import React from 'react';
import { Award } from 'lucide-react';

const PhotoGalleryPage = ({ openImageModal }) => {
  const galleryImages = [
    "/images/Snapchat-1007872902.jpg",
    "/images/Snapchat-1035463494.jpg",
    "/images/Snapchat-108827854.jpg",
    "/images/Snapchat-126926337.jpg",
    "/images/Snapchat-1273415962.jpg",
    "/images/Snapchat-1284538391.jpg",
    "/images/Snapchat-1289360618.jpg",
    "/images/Snapchat-1319744156.jpg",
    "/images/Snapchat-1336784746.jpg",
    "/images/Snapchat-1344013105.jpg",
    "/images/Snapchat-1355540340.jpg",
    "/images/Snapchat-1391292001.jpg",
    "/images/Snapchat-1420136769.jpg",
    "/images/Snapchat-142410687.jpg",
    "/images/Snapchat-1428966388.jpg",
    "/images/Snapchat-1477501508.jpg",
    "/images/Snapchat-1524921027.jpg",
    "/images/Snapchat-1539016537.jpg",
    "/images/Snapchat-1549582751.jpg",
    "/images/Snapchat-1572367111.jpg",
    "/images/Snapchat-1588958062.jpg",
    "/images/Snapchat-1592608901.jpg",
    "/images/Snapchat-1594136778.jpg",
    "/images/Snapchat-1595848872.jpg",
    "/images/Snapchat-1601257890.jpg",
    "/images/Snapchat-1662095310.jpg",
    "/images/Snapchat-1663539030.jpg",
    "/images/Snapchat-1666340886.jpg",
    "/images/Snapchat-1683685017.jpg",
    "/images/Snapchat-1693363936.jpg",
    "/images/Snapchat-1751811326.jpg",
    "/images/Snapchat-1754146224.jpg",
    "/images/Snapchat-1803728383.jpg",
    "/images/Snapchat-1809867985.jpg",
    "/images/Snapchat-1835053050.jpg",
    "/images/Snapchat-1868881663.jpg",
    "/images/Snapchat-1886501633.jpg",
    "/images/Snapchat-1985383162.jpg",
    "/images/Snapchat-2018450942.jpg",
    "/images/Snapchat-207441722.jpg",
    "/images/Snapchat-2113974169.jpg",
    "/images/Snapchat-239244690.jpg",
    "/images/Snapchat-274276409.jpg",
    "/images/Snapchat-311054172.jpg",
    "/images/Snapchat-33747439.jpg",
    "/images/Snapchat-441688776.jpg",
    "/images/Snapchat-449154056.jpg",
    "/images/Snapchat-524221129.jpg",
    "/images/Snapchat-532161803.jpg",
    "/images/Snapchat-587609680.jpg",
    "/images/Snapchat-591957174.jpg",
    "/images/Snapchat-62090873.jpg",
    "/images/Snapchat-62864192.jpg",
    "/images/Snapchat-628656365.jpg",
    "/images/Snapchat-659010646.jpg",
    "/images/Snapchat-673982.jpg",
    "/images/Snapchat-691289312.jpg",
    "/images/Snapchat-737534394.jpg",
    "/images/Snapchat-761906047.jpg",
    "/images/Snapchat-77348017.jpg",
    "/images/Snapchat-80268514.jpg",
    "/images/Snapchat-821175909.jpg",
    "/images/Snapchat-883754535.jpg",
    "/images/Snapchat-945288601.jpg",
    "/images/Snapchat-962582390.jpg",
    "/images/Snapchat-992384854.jpg",
    "/images/alumni_ruth_jebet_kiplagat.png" // Corrected extension
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">Photo Gallery & Events</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">School Photo Gallery</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Explore memorable moments from our school events, academic achievements, sports activities, and creative arts. Click on any image to view it in full size.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openImageModal(src)}
            >
              <img
                src={src}
                alt={`School Event ${index + 1}`}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/cccccc/333333?text=Image+${index + 1}`; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">View Full Image</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="#" className="inline-block bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors text-lg">View More Photos</a>
        </div>
      </div>

      {/* Alumni Section */}
      <div className="mb-8 mt-10">
        <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3">Alumni History</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our alumni are a testament to the strong foundation provided by Pioneer Elite Academy. Many have gone on to excel in various fields, becoming leaders, innovators, and positive contributors to society. We are proud of their achievements and maintain strong ties with our alumni network, encouraging them to mentor current students and share their experiences. Many of our esteemed alumni are now thriving in the diaspora, making significant contributions globally.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg shadow-sm mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/images/alumni_ruth_jebet_kiplagat.jpg" // Corrected extension
            alt="Ruth Jebet Kiplagat"
            className="rounded-full h-32 w-32 object-cover border-2 border-blue-600 dark:border-blue-300 flex-shrink-0"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/e0e0e0/333333?text=Alumni"; }}
          />
          <div>
            <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">Featured Alumni: Ruth Jebet Kiplagat</h4>
            <p className="text-gray-700 dark:text-gray-300 italic">
              Ruth Jebet Kiplagat, the very first student of Pioneer Elite Academy in 2002, has carved a successful career in interior design. Her journey of creativity and innovation began right here, and we are incredibly proud of her accomplishments.
            </p>
          </div>
        </div>
      </div>


      <div>
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Event Calendar</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Stay informed about upcoming school events, holidays, parent-teacher conferences, and important dates.
        </p>
        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">JUL 15</span>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Parent-Teacher Conference</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">9:00 AM - 4:00 PM, School Hall</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">AUG 01</span>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">New Academic Year Begins</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">All students report</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">SEP 10</span>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Annual Sports Day</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">8:00 AM - 1:00 PM, School Field</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200 font-bold px-3 py-1 rounded-full mr-3 flex-shrink-0">OCT 20</span>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Arts & Culture Festival</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">6:00 PM, Auditorium</p>
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

export default PhotoGalleryPage;
