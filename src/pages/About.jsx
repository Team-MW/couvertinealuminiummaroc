import React from 'react';
import { Target, Factory, Wrench, CheckCircle } from 'lucide-react';
import FAQ from '../components/FAQ';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader 
        title="Qui Sommes Nous?" 
        subtitle="Votre spécialiste marocain des solutions en aluminium sur mesure" 
        startTime={15}
      />

      

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '30px' }}>
              Depuis plusieurs années, Couvertine Aluminium Maroc met son savoir-faire au service des particuliers et des professionnels pour la fabrication et la pose d’ouvrages en aluminium.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>
              "Notre mission : offrir des solutions à la fois durables, esthétiques et parfaitement adaptées à vos besoins architecturaux."
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 className="section-title">Notre Savoir-Faire</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '60px' }}>
            Une approche claire, professionnelle et transparente à chaque étape de votre projet.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr)', gap: '40px' }}>
            <div style={{ padding: '40px', backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '16px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-24px', left: '40px', background: 'var(--color-primary)', color: '#000', padding: '12px', borderRadius: '50%' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '16px' }}>Étape 1 : Étude & Conception</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Nous identifions exactement ce qu’il vous faut et créons une solution sur mesure, optimisée pour votre espace. Zéro approximation : uniquement du résultat concret, fiable et durable.</p>
            </div>
            
            <div style={{ padding: '40px', backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '16px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-24px', left: '40px', background: 'var(--color-primary)', color: '#000', padding: '12px', borderRadius: '50%' }}>
                <Factory size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '16px' }}>Étape 2 : Fabrication sur mesure</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Notre atelier mobile fabrique vos pièces directement sur place. Ajustements immédiats, précision parfaite, aucun retard. Vous gagnez en qualité, en rapidité et en tranquillité.</p>
            </div>
            
            <div style={{ padding: '40px', backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '16px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-24px', left: '40px', background: 'var(--color-primary)', color: '#000', padding: '12px', borderRadius: '50%' }}>
                <Wrench size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '16px' }}>Étape 3 : Installation & finition</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Installation rapide et propre, finitions impeccables, conformité totale. Chaque détail est contrôlé pour vous livrer un résultat professionnel, esthétique et durable. Vous recevez exactement ce que vous attendez — en mieux.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="values-grid-container">
            {/* Left: Text & List */}
            <div style={{ textAlign: 'left' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Nos valeurs et nos engagements</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Chez Couvertine Aluminium Maroc, nous croyons que chaque projet mérite une attention particulière. C’est pourquoi nous nous engageons à :
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: '500' }}>
                  <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                    <CheckCircle size={24} />
                  </div>
                  Fournir un travail de qualité supérieure
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: '500' }}>
                  <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                    <CheckCircle size={24} />
                  </div>
                  Assurer un accompagnement personnalisé
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: '500' }}>
                  <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                    <CheckCircle size={24} />
                  </div>
                  Respecter les délais
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: '500' }}>
                  <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                    <CheckCircle size={24} />
                  </div>
                  Promouvoir la fabrication locale
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10%', left: '10%', width: '100%', height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '24px', zIndex: 0, opacity: 0.1 }}></div>
              <img 
                src="/about-values.webp" 
                alt="Nos Engagements Couvertine Aluminium" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', position: 'relative', zIndex: 1, objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>
      <FAQ questions={[
        { question: "Depuis combien de temps existez-vous ?", answer: "Couvertine Aluminium Maroc bénéficie de plus de 10 ans d'expertise dans le pliage et la pose d'aluminium, avec une équipe de professionnels chevronnés." },
        { question: "Où se trouve votre atelier ?", answer: "Notre atelier principal est mobilisable partout au Maroc grâce à nos unités mobiles de pliage, nous permettant de fabriquer sur-mesure directement sur vos chantiers." },
        { question: "Quelle est votre zone d'intervention ?", answer: "Nous intervenons dans toutes les villes du Maroc (Marrakech, Casablanca, Rabat, Agadir, etc.) pour des projets de toutes tailles." }
      ]} />
    </>
  );
}
