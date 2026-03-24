import React from 'react';
import { Target, Factory, Wrench } from 'lucide-react';

export default function About() {
  return (
    <>
      <div style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h1 className="section-title">Qui Sommes Nous?</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Votre spécialiste marocain des solutions en aluminium sur mesure</p>
      </div>

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
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="section-title">Nos valeurs et nos engagements</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px' }}>
            Chez Couvertine Aluminium Maroc, nous croyons que chaque projet mérite une attention particulière. C’est pourquoi nous nous engageons à :
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left' }}>
            <div style={{ padding: '20px', borderLeft: '3px solid var(--color-primary)', backgroundColor: 'var(--color-bg-secondary)' }}>
               <strong>1.</strong> Fournir un travail de qualité supérieure
            </div>
            <div style={{ padding: '20px', borderLeft: '3px solid var(--color-primary)', backgroundColor: 'var(--color-bg-secondary)' }}>
               <strong>2.</strong> Assurer un accompagnement personnalisé
            </div>
            <div style={{ padding: '20px', borderLeft: '3px solid var(--color-primary)', backgroundColor: 'var(--color-bg-secondary)' }}>
               <strong>3.</strong> Respecter les délais
            </div>
            <div style={{ padding: '20px', borderLeft: '3px solid var(--color-primary)', backgroundColor: 'var(--color-bg-secondary)' }}>
               <strong>4.</strong> Promouvoir la fabrication locale
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
