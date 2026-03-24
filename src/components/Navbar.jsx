import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src="/logo.png" alt="Couvertine Aluminium Maroc Logo" className="logo" />
          <span className="logo-text">Couvertine Maroc</span>
        </Link>
        
        <div className="desktop-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Nos Services</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>Qui sommes-nous ?</Link>
          <Link to="/contact" className={`nav-link contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}>Contactez-Nous</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={closeMenu}>Accueil</Link>
          <Link to="/services" className="mobile-link" onClick={closeMenu}>Nos Services</Link>
          <Link to="/about" className="mobile-link" onClick={closeMenu}>Qui sommes-nous ?</Link>
          <Link to="/contact" className="mobile-link contact-btn-mobile" onClick={closeMenu}>Contactez-Nous</Link>
        </div>
      )}
    </nav>
  );
}
