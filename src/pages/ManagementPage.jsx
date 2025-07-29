import React from 'react';
import { Users } from 'lucide-react';

const ManagementPage = () => {
  const staffMembers = [
    { name: "Mr Gideon Kiprotich Lagat", title: "Head Teacher", img: "/images/staff_gideon_lagat.PNG" },
    { name: "Mr Fredrrick Olang", title: "Deputy Head", img: "/images/staff_fredrrick_olang.PNG" },
    { name: "Ms Kiptoo Jepkosgei Sharon", title: "Head of Academics", img: "/images/staff_sharon_kiptoo.PNG" },
  ];

  const director = {
    name: "Mrs Catherine Kiplagat", // Added designation
    title: "School Director",
    img: "https://placehold.co/150x150/e0e0e0/333333?text=Director", // Placeholder image
    statement: "As the Director of Pioneer Elite Academy, I am committed to fostering an environment of innovation and excellence. We strive to equip our students with not just knowledge, but also critical thinking and problem-solving skills, preparing them to be leaders in a rapidly changing world. Our vision is to empower every child to reach their highest potential and contribute positively to society."
  };

  const proprietor = {
    name: "Mr Jonathan Kiplagat", // Added designation
    title: "School Proprietor",
    img: "https://placehold.co/150x150/e0e0e0/333333?text=Proprietor", // Placeholder image
    statement: "It is with great pride that I oversee Pioneer Elite Academy. My aim has always been to provide a foundation for holistic growth, where academic rigor is balanced with strong moral values and character development. We believe in creating a nurturing community that inspires a lifelong love for learning and prepares students for a future of purpose and impact."
  };

  return (
    <section className="bg-red-50 dark:bg-red-900 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6 border-b-2 border-blue-200 dark:border-blue-700 pb-2">School Management</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3">Our Dedicated Team</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          At Pioneer Elite Academy, we are incredibly proud of our highly qualified, passionate, and dedicated team of educators and support staff. They are the backbone of our school, committed to nurturing every student's potential and fostering a positive learning environment. Our staff members embody the school's values and work tirelessly to ensure the success and well-being of our students, including our esteemed Director and Proprietor, alongside all our teaching and non-teaching staff.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-3">School Culture</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our school culture is built on mutual respect, collaboration, and a shared commitment to excellence. We encourage continuous professional development for our staff, ensuring they are equipped with the latest pedagogical techniques and resources. This vibrant culture extends beyond the classrooms, fostering a supportive community where every individual feels valued and empowered.
        </p>
      </div>

      {/* Proprietor Section - Moved before Director Section */}
      <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <img
          src={proprietor.img}
          alt={proprietor.name}
          className="rounded-full h-32 w-32 object-cover border-2 border-yellow-600 dark:border-yellow-300 flex-shrink-0"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/e0e0e0/333333?text=Proprietor"; }}
        />
        <div className="text-center md:text-left flex-1">
          <h4 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-1">{proprietor.name}</h4>
          <p className="text-yellow-700 dark:text-yellow-400 text-lg mb-3">{proprietor.title}</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{proprietor.statement}"</p>
        </div>
      </div>

      {/* Director Section */}
      <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <img
          src={director.img}
          alt={director.name}
          className="rounded-full h-32 w-32 object-cover border-2 border-yellow-600 dark:border-yellow-300 flex-shrink-0"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/e0e0e0/333333?text=Director"; }}
        />
        <div className="text-center md:text-left flex-1">
          <h4 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-1">{director.name}</h4>
          <p className="text-yellow-700 dark:text-yellow-400 text-lg mb-3">{director.title}</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{director.statement}"</p>
        </div>
      </div>

      {/* Existing Staff Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {staffMembers.map((staff, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
            <img
              src={staff.img}
              alt={staff.name}
              className="rounded-full h-24 w-24 object-cover mx-auto mb-4 border-2 border-yellow-600 dark:border-yellow-300"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/e0e0e0/333333?text=Staff"; }}
            />
            <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-1">{staff.name}</h4>
            <p className="text-yellow-700 dark:text-yellow-400 text-sm">{staff.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementPage;
