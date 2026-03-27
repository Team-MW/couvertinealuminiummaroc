import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import PageHeader from '../components/PageHeader';

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
      <PageHeader 
        title="Galerie Photos" 
        subtitle="Nos dernières réalisations d'habillage en aluminium partout au Maroc" 
        startTime={80}
      />
      

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

      {/* Solutions Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title">Nos Solutions Sur-Mesure</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Découvrez nos prestations haut de gamme en habillage aluminium, conçues pour protéger, isoler et transcender le design de vos bâtiments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            {[
              {
                title: "Couvertine en aluminium 10/10ème",
                desc: "Cette couvertine se distingue par sa résistance à la corrosion et aux variations climatiques, assurant une durabilité accrue sans nécessiter d’entretien régulier.",
                img: "/srv-couvertine.webp"
              },
              {
                title: "Lambris en aluminium / Façades",
                desc: "Idéal pour habiller les murs et les plafonds aussi bien en intérieur qu’en extérieur. Résistant aux intempéries, humidité et corrosion.",
                img: "/srv-lambris.webp"
              },
              {
                title: "Boîte à eau et descente pluviale",
                desc: "Permet de collecter et de diriger efficacement les eaux pluviales vers les descentes, tout en évitant les débordements.",
                img: "/srv-boite.webp"
              },
              {
                title: "Appui de fenêtre en aluminium",
                desc: "Dispositif léger et robuste garantissant une évacuation parfaite de l'eau et une protection durable de vos ouvertures.",
                img: "/srv-appui.webp"
              },
              {
                title: "Étanchéité Professionnelle",
                desc: "Garantit la durabilité et la sécurité des bâtiments en assurant une barrière impénétrable contre les infiltrations.",
                img: "/srv-etancheite.webp"
              }
            ].map((srv, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--color-bg-main)', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid var(--color-border)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
              className="solution-card"
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={srv.img} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="solution-img" />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--color-primary)' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Stylish Yellow Version */}
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
          fontSize: 'clamp(6rem, 25vw, 18rem)', 
          fontWeight: '900', 
          color: 'rgba(0,0,0,0.05)', 
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none',
          fontFamily: 'var(--font-display)',
          letterSpacing: '-5px'
        }}>
          PROJET
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: '950', 
            color: '#000',
            textTransform: 'uppercase',
            marginBottom: '24px',
            lineHeight: '0.9',
            letterSpacing: '-2px'
          }}>
            Vous avez un <br />projet similaire ?
          </h2>
          <p style={{ 
            color: '#000', 
            maxWidth: '600px', 
            margin: '0 auto 40px', 
            fontSize: '1.2rem',
            fontWeight: '600',
            lineHeight: '1.4'
          }}>
            Nos experts sont prêts à intervenir pour vous offrir un habillage de qualité supérieure.
          </p>
          <Link to="/contact" className="btn" style={{ 
            padding: '18px 48px', 
            fontSize: '1.1rem',
            backgroundColor: '#000',
            color: '#ffcc00',
            borderRadius: '50px',
            fontWeight: '900',
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(-1deg)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
          >
            Demander mon devis gratuit
          </Link>
        </div>
      </section>
      <FAQ questions={[
        { question: "Où peut-on voir vos réalisations en personne ?", answer: "Nos réalisations sont visibles sur de nombreux projets publics et privés partout au Maroc. Contactez-nous pour une liste des chantiers dans votre ville." },
        { question: "Puis-je avoir un échantillon de couleur ?", answer: "Oui, lors du devis, nos techniciens vous présentent un nuancier physique et des échantillons d'aluminium laqué pour valider votre choix." },
        { question: "Est-ce que vos photos sont réelles ?", answer: "Toutes les photos de cette galerie sont issues de nos propres chantiers au Maroc. Pas de photos de catalogue, juste notre vrai travail." }
      ]} />
    </>
  );
}
