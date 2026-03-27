import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Contact from './pages/Contact';
import Galerie from './pages/Galerie';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import './App.css';

// Component to handle route-based loading
const AppContent = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Show loader on route change
    setIsPageLoading(true);
    
    // Duration: 1.5s for initial, 800ms for subsequent transitions
    const duration = isInitialLoad ? 2200 : 800;
    
    const timer = setTimeout(() => {
      setIsPageLoading(false);
      if (isInitialLoad) setIsInitialLoad(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Preloader duration={isInitialLoad ? 2200 : 800} isTriggered={isPageLoading} />
      <div className={`app-container ${!isPageLoading ? 'loaded' : ''}`}>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galerie" element={<Galerie />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

