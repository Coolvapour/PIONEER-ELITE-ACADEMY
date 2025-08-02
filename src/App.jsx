import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ManagementPage from "./pages/ManagementPage";
import TheSchoolPage from "./pages/TheSchoolPage";
import ChapelPage from "./pages/ChapelPage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import ContactPage from "./pages/ContactPage";
import OnlineManualPage from "./pages/OnlineManualPage";
import NotFoundPage from "./pages/NotFoundPage"; // Import the new NotFoundPage component
import "./App.css"; // Assuming you have an App.css if needed

function App() {
  // Initialize theme from localStorage or default to light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialMode = savedTheme === 'dark';
    console.log('App: Initial isDarkMode:', initialMode, 'from localStorage:', savedTheme);
    // Ensure localStorage always has a valid 'light' or 'dark' value on load
    localStorage.setItem('theme', initialMode ? 'dark' : 'light');
    return initialMode;
  });

  const [selectedImage, setSelectedImage] = useState(null); // State for modal image viewer
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile navigation menu
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      console.log('App: Toggled isDarkMode to:', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Set initial theme on component mount
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="flex-grow container mx-auto p-4 transition-colors duration-300">
          <div className="mt-20"> {/* Margin to prevent content from hiding under sticky header */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/school" element={<TheSchoolPage />} />
              <Route path="/chapel" element={<ChapelPage />} />
              {/* Pass openImageModal to PhotoGalleryPage */}
              <Route path="/gallery" element={<PhotoGalleryPage openImageModal={openImageModal} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/manual" element={<OnlineManualPage />} />
              {/* This is the new "catch-all" route for 404 pages */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        <Footer showScrollToTop={showScrollToTop} scrollToTop={scrollToTop} isDarkMode={isDarkMode} />

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
          >
            <div className={`relative rounded-lg p-2 max-w-full max-h-full overflow-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeImageModal}
                className={`absolute top-2 right-2 text-3xl font-bold p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-200 bg-gray-700 hover:bg-gray-600' : 'text-gray-800 bg-gray-200 hover:bg-gray-300'}`}
              >
                &times;
              </button>
              <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-screen" />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
