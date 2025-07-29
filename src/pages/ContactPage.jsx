import React from 'react';
import { Mail, Briefcase, Phone, MessageSquare, MapPin, Headset, Book, Facebook, X, Instagram } from 'lucide-react'; // Added Facebook, X, Instagram icons

const CONTACT_BG_IMAGE = 'https://www.pexels.com/photo/clear-light-bulb-placed-on-chalkboard-355952/';

const ContactPage = () => {
  const contactNumbers = [
    { label: "Administration", numbers: ["+254722496897", "+254722286280"] },
    { label: "Finance Office", numbers: ["+254724016006"] },
    { label: "Academics", numbers: ["+254722496897"] },
    { label: "Contact Center & Help", numbers: ["+254705926417"] },
  ];

  return (
    <section
      className="p-8 rounded-lg shadow-md mb-8 relative overflow-hidden bg-white dark:bg-gray-800"
      style={{
        backgroundImage: `url(${CONTACT_BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 rounded-lg"></div> {/* Overlay for readability */}
      <div className="relative z-10"> {/* Content wrapper */}
        <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Our Location</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Find us easily using the map below. We are conveniently located at:
              <br /><br />
              <strong>PIONEER ELITE ACADEMY</strong><br />
              P.O Box 4-30101, Ainabkoi<br />
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
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Get in Touch</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
              <li className="flex items-center space-x-3">
                <Mail size={24} className="text-yellow-600 dark:text-yellow-300" />
                <span>Email: <a href="mailto:info@pioneerelite.edu" className="text-yellow-600 dark:text-yellow-300 hover:underline">info@pioneerelite.edu</a></span>
              </li>
              {contactNumbers.map((contact, index) => (
                <li key={index}>
                  <span className="font-semibold flex items-center space-x-3">
                    {contact.label === "Administration" && <Phone size={24} className="text-yellow-600 dark:text-yellow-300" />}
                    {contact.label === "Finance Office" && <Briefcase size={24} className="text-yellow-600 dark:text-yellow-300" />}
                    {contact.label === "Academics" && <Book size={24} className="text-yellow-600 dark:text-yellow-300" />}
                    {contact.label === "Contact Center & Help" && <Headset size={24} className="text-yellow-600 dark:text-yellow-300" />}
                    <span>{contact.label}:</span>
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1 ml-9">
                    {contact.numbers.map((number, numIndex) => (
                      <React.Fragment key={numIndex}>
                        <a href={`tel:${number}`} className="text-blue-600 hover:underline">
                          <Phone size={18} className="inline-block mr-1" />
                          <span>{number} (Call)</span>
                        </a>
                        <a href={`https://wa.me/${number}?text=Hi%2C%20I%20need%20help%20from%20Pioneer%20Elite%20Academy.`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                          <MessageSquare size={18} className="inline-block mr-1" />
                          <span>{number} (WhatsApp)</span>
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mt-8 mb-3">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-yellow-300 hover:text-yellow-700 transition-colors">
                <Facebook size={30} /> {/* Replaced SVG with Lucide React icon */}
              </a>
              <a href="https://twitter.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-yellow-300 hover:text-yellow-700 transition-colors">
                <X size={30} /> {/* Replaced SVG with Lucide React icon */}
              </a>
              <a href="https://instagram.com/pioneereliteacademy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-yellow-300 hover:text-yellow-700 transition-colors">
                <Instagram size={30} /> {/* Replaced SVG with Lucide React icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
