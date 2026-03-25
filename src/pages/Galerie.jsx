import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedStats from '../components/AnimatedStats';

export default function Galerie() {
  const images = [
    { id: 1, src: "/gallery/g1.webp", alt: "Couvertine Aluminium" },
    { id: 2, src: "/gallery/g2.webp", alt: "Atelier Mobile Couvertine" },
    { id: 3, src: "/gallery/g3.webp", alt: "Pose Lambris" },
    { id: 4, src: "/gallery/g4.webp", alt: "Finition Aluminium" },
    { id: 5, src: "/gallery/g5.webp", alt: "Façade Contemporaine" },
    { id: 6, src: "/gallery/g6.webp", alt: "Habillage Acrotère" },
    { id: 7, src: "/gallery/g7.webp", alt: "Étanchéité Toiture" },
    { id: 8, src: "/gallery/g8.webp", alt: "Détail Aluminium" },
    { id: 9, src: "/gallery/g9.webp", alt: "Profilé Aluminium" },
    { id: 10, src: "/gallery/g10.webp", alt: "Protection Muret" },
    { id: 11, src: "/gallery/g11.webp", alt: "Appui de fenêtre" },
    { id: 12, src: "/gallery/g12.webp", alt: "Boîte à eau" },
    { id: 13, src: "/gallery/g13.webp", alt: "Descente pluviale" }
  ];

  return (
    <>
      <div style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h1 className="section-title">Galerie Photos</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Nos dernières réalisations d'habillage en aluminium partout au Maroc</p>
      </div>
      
      <AnimatedStats />

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Nos Réalisations sur Chantiers</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Parcourez nos photos de chantiers pour apprécier la qualité de nos finitions et la diversité de nos interventions en couvertines, lambris et étanchéité.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {images.map((img) => (
              <div 
                key={img.id} 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  aspectRatio: '3/2', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  backgroundColor: '#f3f4f6'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Vous avez un projet similaire ?</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.2rem' }}>
            Nos experts sont prêts à intervenir pour vous offrir un habillage de qualité supérieure.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
            Demander mon devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
