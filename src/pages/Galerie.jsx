import React from 'react';
import { Link } from 'react-router-dom';

export default function Galerie() {
  return (
    <>
      <div style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h1 className="section-title">Galerie</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Découvrez nos réalisations et projets d'habillage en aluminium</p>
      </div>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Nos Réalisations</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Découvrez nos différents projets de couvertines. Chaque image et vidéo reflète la qualité de notre travail et la satisfaction de nos clients.
            </p>
            <p style={{ color: 'var(--color-text-main)', maxWidth: '800px', margin: '24px auto 0', fontSize: '1.2rem', fontWeight: '500', padding: '20px', borderLeft: '4px solid var(--color-primary)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '0 12px 12px 0', textAlign: 'left' }}>
              Couvertine Aluminium Maroc offre la protection la plus fiable pour vos bâtiments grâce à son atelier mobile. Sur-mesure, rapide et durable : nous valorisons vos murs et façades partout au Maroc, avec une finition professionnelle garantie.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} style={{ backgroundColor: 'var(--color-bg-secondary)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Réalisation {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Besoin d'un habillage sur-mesure ?</h2>
          <Link to="/contact" className="btn btn-primary">Obtenir un devis gratuit</Link>
        </div>
      </section>
    </>
  );
}
