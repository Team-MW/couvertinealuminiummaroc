import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo-container">
            <img src="/logo.webp" alt="Logo" className="logo" />
          </Link>
          <p className="footer-desc">
            L'expert de l'habillage en aluminium pour une protection élégante et durable.
          </p>
          <div className="footer-contact-info">
            <p><MapPin size={16} /> KM 20 route de Fes à Marrakech</p>
            <p>
              <Phone size={16} /> 
              <a href="tel:+212661562140" className="footer-contact-link" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '8px', transition: 'color 0.2s' }}>
                +212 661 562 140
              </a>
            </p>
            <p>
              <Mail size={16} /> 
              <a href="mailto:couvertinealuminiummaroc@gmail.com" className="footer-contact-link" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '8px', transition: 'color 0.2s' }}>
                couvertinealuminiummaroc@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">Liens Rapides</h4>
          <Link to="/" className="footer-link"><ChevronRight size={16} /> Accueil</Link>
          <Link to="/services" className="footer-link"><ChevronRight size={16} /> Nos Services</Link>
          <Link to="/galerie" className="footer-link"><ChevronRight size={16} /> Galerie</Link>
          <Link to="/about" className="footer-link"><ChevronRight size={16} /> Qui sommes-nous ?</Link>
          <Link to="/contact" className="footer-link"><ChevronRight size={16} /> Contactez-Nous</Link>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">Services</h4>
          <Link to="/services" className="footer-link"><ChevronRight size={16} /> Couvertine sur muret</Link>
          <Link to="/services" className="footer-link"><ChevronRight size={16} /> Habillage d'acrotère</Link>
          <Link to="/services" className="footer-link"><ChevronRight size={16} /> Boîtes à eau & descentes</Link>
          <Link to="/services" className="footer-link"><ChevronRight size={16} /> Pliage sur mesure</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Couvertine Aluminium Maroc. Tous droits réservés.</p>
          <p style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.7 }}>
            <Link to="/mentions-legales" style={{marginRight: '12px'}}>Mentions légales</Link> 
            <Link to="/politique-confidentialite" style={{marginRight: '12px'}}>Politique de confidentialité</Link> 
            <Link to="/mentions-legales">Conditions d’utilisation</Link>
          </p>
          <p style={{ marginTop: '16px', fontSize: '0.85rem' }}>
            Réalisé par <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>microdidact</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
