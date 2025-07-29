import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AdmissionsPage from "./pages/AdmissionsPage"; // Import the new AdmissionsPage
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialMode = savedTheme === 'dark';
    console.log('App: Initial isDarkMode:', initialMode, 'from localStorage:', savedTheme);
    localStorage.setItem('theme', initialMode ? 'dark' : 'light');
    return initialMode;
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      console.log('App: Toggling theme. New isDarkMode:', newMode, 'localStorage set to:', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      console.log('App: Added "dark" class to <html>. Current isDarkMode:', isDarkMode);
    } else {
      root.classList.remove("dark");
      console.log('App: Removed "dark" class from <html>. Current isDarkMode:', isDarkMode);
    }
  }, [isDarkMode]);

  const CUSTOM_BACKGROUND_IMAGE = '/images/Snapchat-962582390.jpg';

  return (
    <BrowserRouter>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main
        className="min-h-screen p-4 transition duration-500 ease-in-out relative overflow-hidden"
        style={{
          backgroundImage: `url(${CUSTOM_BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 bg-opacity-60' : 'bg-white bg-opacity-60'}`}></div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/the-school" element={<TheSchoolPage />} />
            <Route path="/chapel" element={<ChapelPage />} />
            <Route path="/gallery" element={<PhotoGalleryPage openImageModal={openImageModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/manual" element={<OnlineManualPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} /> {/* New route for AdmissionsPage */}
          </Routes>
        </div>
      </main>
      <Footer />

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
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[80vh] object-contain mx-auto" />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
