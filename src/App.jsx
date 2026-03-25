import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Galerie from './pages/Galerie';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fading out the loader after 1.5 seconds
    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1500);
    
    // Remove the loader entirely after the fade transition finishes (0.5s)
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Router>
      {loading && (
        <div className={`global-loader ${fade ? 'loader-fade-out' : ''}`}>
          <div className="custom-spinner"></div>
        </div>
      )}
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galerie" element={<Galerie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
