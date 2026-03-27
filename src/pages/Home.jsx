import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Quote, Star, Layers, Building2, Droplets, PenTool } from 'lucide-react';
import AnimatedStats from '../components/AnimatedStats';

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
      <AnimatedStats />

      {/* Why Choose Us - Stylish Yellow Version */}
      <section style={{ 
        padding: '120px 0', 
        backgroundColor: '#ffcc00', 
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Large Watermark Text */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          fontSize: 'clamp(5rem, 18vw, 15rem)', 
          fontWeight: '950', 
          color: 'rgba(0,0,0,0.05)', 
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none',
          fontFamily: 'var(--font-display)',
          letterSpacing: '-5px'
        }}>
          EXPERTISE
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title" style={{ 
            color: '#000', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '950', 
            textTransform: 'uppercase',
            marginBottom: '20px',
            lineHeight: '0.9',
            letterSpacing: '-2px'
          }}>
            Pourquoi Nous Choisir ?
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#000', 
            maxWidth: '750px', 
            margin: '0 auto 60px', 
            fontWeight: '600', 
            fontSize: '1.2rem',
            lineHeight: '1.4'
          }}>
            Avec une expérience reconnue depuis plus de 20 ans dans le domaine de l’aluminium, notre entreprise s’engage à offrir un travail précis, durable et esthétique.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {['Fabrication 100% marocaine', 'Produits résistants et garantis', 'Équipe qualifiée et expérimentée', 'Respect des délais et des finitions', 'Devis rapide et personnalisé'].map((reason, idx) => (
              <div key={idx} className="reason-card-stylish" style={{ 
                padding: '30px 24px', 
                backgroundColor: '#000', 
                borderRadius: '20px', 
                color: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <span style={{ 
                  display: 'block', 
                  fontSize: '2.5rem', 
                  fontWeight: '950', 
                  color: '#ffcc00', 
                  marginBottom: '10px',
                  lineHeight: '1'
                }}>
                  0{idx + 1}
                </span>
                <p style={{ 
                  margin: 0, 
                  fontWeight: '700', 
                  fontSize: '1.1rem', 
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Découvrez Couvertine en Vidéo</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Plongez au cœur de notre expertise et regardez comment nos profilés en aluminium assurent un design premium et une étanchéité parfaite pour vos bâtiments.
            </p>
          </div>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Glow effect */}
            <div style={{ position: 'absolute', top: '10%', left: '5%', right: '5%', bottom: '-10%', background: 'linear-gradient(135deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1))', filter: 'blur(60px)', zIndex: 0, borderRadius: '50%' }}></div>
            
            {/* Video Container */}
            <div style={{ position: 'relative', width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.3)', zIndex: 1, backgroundColor: '#000', aspectRatio: '16/9' }}>
              <iframe 
                src="https://www.youtube.com/embed/ZfSzKrKHd-k?rel=0&showinfo=0&modestbranding=1&vq=hd1080" 
                title="Présentation Couvertine Aluminium Maroc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>



      {/* About Teaser */}
      <section style={{ padding: '100px 0', backgroundColor: '#ffffff', color: '#202124', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="values-grid-container">
            {/* Collage Images */}
            <div className="about-collage-grid">
              <img src="/about-1.webp" alt="Projet" className="about-collage-img" />
              <img src="/about-2.webp" alt="Service" className="about-collage-img" />
              <img src="/about-3.webp" alt="Installation" className="about-collage-img" />
              <img src="/about-4.webp" alt="Équipe" className="about-collage-img" />
            </div>

            {/* Content */}
            <div className="about-content">
              <h2 style={{ textAlign: 'left', color: '#111827', fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '24px', lineHeight: '1.2', fontWeight: '800' }}>
                À propos de Couvertine Aluminium Maroc
              </h2>
              <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
                Spécialisée dans la fabrication et la pose d’éléments en aluminium, notre société accompagne 
                particuliers et professionnels dans tous leurs projets. Notre mission : allier résistance, 
                design et durabilité au service de vos bâtiments.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem', color: '#111827', fontWeight: 'bold' }}>
                  <CheckCircle size={24} color="var(--color-primary)" /> Expérience et savoir-faire
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem', color: '#111827', fontWeight: 'bold' }}>
                  <CheckCircle size={24} color="var(--color-primary)" /> Garantie de satisfaction à 100 %
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem', color: '#111827', fontWeight: 'bold' }}>
                  <CheckCircle size={24} color="var(--color-primary)" /> Équipe professionnelle
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem', color: '#111827', fontWeight: 'bold' }}>
                  <CheckCircle size={24} color="var(--color-primary)" /> Intervention nationale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer pre-cta - Stylish Yellow Version */}
      <section style={{ 
        padding: '120px 0', 
        backgroundColor: '#ffcc00', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Large Watermark Text */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          fontSize: 'clamp(6rem, 22vw, 18rem)', 
          fontWeight: '950', 
          color: 'rgba(0,0,0,0.05)', 
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none',
          fontFamily: 'var(--font-display)',
          letterSpacing: '-5px'
        }}>
          MAROC
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: '950', 
            color: '#000',
            textTransform: 'uppercase',
            marginBottom: '20px',
            lineHeight: '0.9',
            letterSpacing: '-2px'
          }}>
            Couvertine <br />Aluminium Maroc
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '40px', 
            fontWeight: '600',
            color: '#000',
            lineHeight: '1.4'
          }}>
            Couverture la plus fiable pour vos bâtiments grâce à son atelier mobile. Sur-mesure, rapide et durable : nous valorisons vos murs et façades partout au Maroc.
          </p>
          <Link to="/contact" className="btn" style={{ 
            padding: '18px 48px', 
            backgroundColor: '#000', 
            color: '#ffcc00',
            borderRadius: '50px',
            fontWeight: '900',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
          >
            Contactez-nous aujourd'hui
          </Link>
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
    </>
  );
}
