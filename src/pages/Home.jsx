import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Quote, Star, Layers, Building2, Droplets, PenTool } from 'lucide-react';

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
               <img src="/about-photo.webp" alt="Couvertine" className="about-inner-img" />
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
      <section style={{ padding: '100px 0', backgroundColor: '#ffffff', color: '#202124', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title" style={{ color: '#202124', marginBottom: '20px' }}>Nos Services de Haute Qualité</h2>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              Nous proposons des solutions sur-mesure en habillage aluminium pour protéger et sublimer vos façades, avec une précision et un savoir-faire inégalés.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            {/* Service 1 */}
            <div style={{ padding: '40px 30px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Layers size={32} color="var(--color-primary)" />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '16px', fontWeight: 'bold' }}>Couvertine sur muret</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                Protection ultime et esthétique pour vos murets de clôture et terrasses, garantissant la fin des infiltrations d'eau.
              </p>
            </div>
            
            {/* Service 2 */}
            <div style={{ padding: '40px 30px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Building2 size={32} color="var(--color-primary)" />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '16px', fontWeight: 'bold' }}>Habillage d'acrotère</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                Une solution idéale pour assurer l’étanchéité de vos toitures-terrasses avec un design épuré et contemporain.
              </p>
            </div>
            
            {/* Service 3 */}
            <div style={{ padding: '40px 30px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Droplets size={32} color="var(--color-primary)" />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '16px', fontWeight: 'bold' }}>Boîtes à eau & descentes</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                Systèmes professionnels de collecte et d’évacuation des eaux pluviales en aluminium : fiables et discrets.
              </p>
            </div>
            
            {/* Service 4 */}
            <div style={{ padding: '40px 30px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <PenTool size={32} color="var(--color-primary)" />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '16px', fontWeight: 'bold' }}>Pliage sur mesure</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                Précision millimétrique grâce à notre plieuse pour des pièces adaptées à toutes les complexités de votre chantier.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary">
              Parcourir Tous Nos Services <ArrowRight size={16} className="btn-icon" />
            </Link>
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
      <section style={{ padding: '100px 0', backgroundColor: '#ffffff', color: '#202124' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#202124' }}>Ce que disent nos clients</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '10px', marginBottom: '50px' }}>
             <h3 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: 0, color: '#202124', lineHeight: 1 }}>5.0</h3>
             <div>
               <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                 <Star size={24} fill="#fbbc04" color="#fbbc04" />
                 <Star size={24} fill="#fbbc04" color="#fbbc04" />
                 <Star size={24} fill="#fbbc04" color="#fbbc04" />
                 <Star size={24} fill="#fbbc04" color="#fbbc04" />
                 <Star size={24} fill="#fbbc04" color="#fbbc04" />
               </div>
               <span style={{ fontSize: '1.1rem', color: '#70757a', fontWeight: '500' }}>Avis certifiés sur Google</span>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { text: "Travail de qualité, équipe professionnelle et résultat impeccable.", author: "M. Youssef" },
              { text: "Installation rapide et finitions parfaites. Je recommande sans hésiter.", author: "Mme Hanane" },
              { text: "Très satisfait du service, à l’écoute et ponctuel.", author: "Société Construction" }
            ].map((testi, i) => (
              <div key={i} style={{ padding: '24px', backgroundColor: '#ffffff', border: '1px solid #e8eaed', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: ['#4285F4', '#34A853', '#EA4335'][i], color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                      {testi.author.charAt(0)}
                    </div>
                    <div>
                      <h4 style={{ color: '#202124', fontSize: '1rem', fontWeight: 'bold', marginBottom: '2px', textAlign: 'left' }}>{testi.author}</h4>
                      <div style={{ display: 'flex', gap: '2px' }}>
                         <Star size={14} fill="#fbbc04" color="#fbbc04" />
                         <Star size={14} fill="#fbbc04" color="#fbbc04" />
                         <Star size={14} fill="#fbbc04" color="#fbbc04" />
                         <Star size={14} fill="#fbbc04" color="#fbbc04" />
                         <Star size={14} fill="#fbbc04" color="#fbbc04" />
                      </div>
                    </div>
                  </div>
                  <div style={{ opacity: 0.9 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                <p style={{ color: '#202124', fontSize: '1rem', lineHeight: '1.5', textAlign: 'left' }}>{testi.text}</p>
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
