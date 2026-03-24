import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Quote, Star } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/ZfSzKrKHd-k?autoplay=1&mute=1&loop=1&playlist=ZfSzKrKHd-k&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            title="Background Video"
            className="hero-video"
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-badge">Qualité, Design et Durabilité Réunies</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)'}}>
             L’Aluminium, <span className="highlight">l’Élégance</span> et la Protection Durable
          </h1>
          <p className="hero-subtitle">
            Une touche de style pour des murs préservés. Couvertine Aluminium Maroc protège et sublime vos bâtiments avec des profilés sur-mesure.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary">
              Demander un devis gratuit
              <ArrowRight size={18} className="btn-icon" />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              En savoir plus sur notre expertise
            </Link>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section" style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>320</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Projets réussis</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>7</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Membres d'équipe professionnelle</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>180+</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Clients satisfaits</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>10+</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Années d'expérience</p>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <div className="about-image-shape"></div>
            <div className="about-image-placeholder">
               <img src="/logo.png" alt="Couvertine" className="about-inner-img" />
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>À propos de Couvertine Aluminium Maroc</h2>
            <p className="about-text">
              Spécialisée dans la fabrication et la pose d’éléments en aluminium, notre société accompagne 
              particuliers et professionnels dans tous leurs projets. Notre mission : allier <strong>résistance</strong>, 
              <strong> design</strong> et <strong>durabilité</strong> au service de vos bâtiments.
            </p>
            
            <ul className="about-list">
              <li><CheckCircle size={20} className="list-icon" /> Expérience et savoir-faire</li>
              <li><CheckCircle size={20} className="list-icon" /> Garantie de satisfaction à 100 %</li>
              <li><CheckCircle size={20} className="list-icon" /> Équipe professionnelle</li>
              <li><CheckCircle size={20} className="list-icon" /> Intervention nationale</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="features-section" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Link to="/services" className="btn btn-secondary">Parcourir Tous Nos Services <ArrowRight size={16} className="btn-icon" /></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Pourquoi Nous Choisir ?</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 40px' }}>
            Avec une expérience reconnue depuis plus de 20 ans dans le domaine de l’aluminium, notre entreprise s’engage à offrir un travail précis, durable et esthétique.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {['Fabrication 100% marocaine', 'Produits résistants et garantis', 'Équipe qualifiée et expérimentée', 'Respect des délais et des finitions', 'Devis rapide et personnalisé'].map((reason, idx) => (
              <div key={idx} style={{ padding: '24px', backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)', opacity: 0.5 }}>0{idx + 1}</span>
                <p style={{ marginTop: '12px', fontWeight: '500' }}>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {[
              { text: "Travail de qualité, équipe professionnelle et résultat impeccable.", author: "M. Youssef" },
              { text: "Installation rapide et finitions parfaites. Je recommande sans hésiter.", author: "Mme Hanane" },
              { text: "Très satisfait du service, à l’écoute et ponctuel.", author: "Société Construction" }
            ].map((testi, i) => (
              <div key={i} style={{ padding: '30px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: '16px' }}>
                <Quote size={32} color="var(--color-primary)" style={{ opacity: 0.3, marginBottom: '16px' }} />
                <p style={{ fontStyle: 'italic', marginBottom: '20px', minHeight: '60px' }}>"{testi.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--color-primary)' }}>{testi.author}</h4>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                       <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                       <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                       <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                       <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                       <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer pre-cta */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-primary)', color: '#000', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#000' }}>Couvertine Aluminium Maroc</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: '500' }}>
            Couverture la plus fiable pour vos bâtiments grâce à son atelier mobile. Sur-mesure, rapide et durable : nous valorisons vos murs et façades partout au Maroc.
          </p>
          <Link to="/contact" className="btn" style={{ backgroundColor: '#000', color: '#fff' }}>Contactez-nous aujourd'hui</Link>
        </div>
      </section>
    </>
  );
}
