import React from 'react';
import { Package, Maximize, Droplet, LayoutPanelTop, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedStats from '../components/AnimatedStats';

export default function Services() {
  const services = [
    {
      id: "couvertine",
      icon: <LayoutPanelTop size={40} />,
      title: "Couvertine en aluminium 10/10ème",
      desc: "Protection ultime et esthétique pour vos murets de clôture et terrasses. Notre couvertine garantit la fin des infiltrations d'eau.",
      details: [
        "Résistance exceptionnelle à la corrosion",
        "Durabilité accrue sans entretien régulier",
        "Disponible en plusieurs finitions laquées"
      ]
    },
    {
      id: "lambris",
      icon: <Maximize size={40} />,
      title: "Lambris en aluminium / Façades",
      desc: "Idéal pour habiller les murs et les plafonds aussi bien en intérieur qu’en extérieur. Un choix parfait pour les façades, sous-toitures et vérandas.",
      details: [
        "Isolation et protection thermique",
        "Résistance à l'humidité et aux UV",
        "Esthétique moderne et design"
      ]
    },
    {
      id: "boite-eau",
      icon: <Droplet size={40} />,
      title: "Boîte à eau et descente pluviales",
      desc: "Systèmes professionnels de collecte et d’évacuation des eaux pluviales en aluminium : fiables, discrets et déclinables dans de multiples coloris.",
      details: [
        "Prévention totale des débordements",
        "Finitions laquées ou anodisées",
        "Fabrication sur-mesure aux dimensions exactes"
      ]
    },
    {
      id: "appui",
      icon: <Package size={40} />,
      title: "Appui de fenêtre en aluminium",
      desc: "Conçu en aluminium, ce dispositif se distingue par sa légèreté, sa robustesse et sa résistance à la corrosion pour habiller vos rebords de fenêtres.",
      details: [
        "Léger et ultra-robuste",
        "Évacuation parfaite de l'eau",
        "Design épuré et contemporain"
      ]
    },
    {
      id: "etancheite",
      icon: <Shield size={40} />,
      title: "Étanchéité & Isolation",
      desc: "Application de revêtements professionnels pour garantir une protection optimale de vos toitures et terrasses en toutes circonstances climatiques.",
      details: [
        "Protection longue durée",
        "Intervention rapide et propre",
        "Expertise certifiée"
      ]
    }
  ];

  const colors = [
    "Blanc", "Sable", "Noir", "Marron (RAL 8017)", "Gris alu (RAL 9006)", "Anthracite", "Bordeaux", "Brique", "Cuivre", "Vert Réséda", "Vert Sapin"
  ];

  return (
    <>
      <div style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h1 className="section-title">Nos Services & Expertises</h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>Des solutions d’habillage sur-mesure en aluminium pour protéger, isoler et sublimer tous vos bâtiments à travers le Maroc.</p>
      </div>

      <AnimatedStats />

      {/* Services List */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            {services.map((srv, idx) => (
              <div key={srv.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '30px', backgroundColor: 'var(--color-bg-secondary)', padding: '50px', borderRadius: '24px', border: '1px solid var(--color-border)', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ color: 'var(--color-primary)', background: 'rgba(212,175,55,0.1)', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {srv.icon}
                    </div>
                    <h3 style={{ fontSize: '2rem', margin: 0 }}>{srv.title}</h3>
                  </div>
                  
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    {srv.desc}
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '10px' }}>
                    {srv.details.map((detail, i) => (
                       <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text-main)', fontSize: '1.05rem' }}>
                         <CheckCircle size={20} color="var(--color-primary)" />
                         <span style={{ fontWeight: '500' }}>{detail}</span>
                       </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-main)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 className="section-title">Pourquoi l'aluminium est le choix idéal ?</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 60px', fontSize: '1.1rem' }}>
            L'aluminium est le matériau roi de l'architecture moderne. Il concentre tous les avantages physiques, esthétiques et économiques pour habiller vos façades.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '16px', borderLeft: '4px solid var(--color-primary)' }}>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Zéro Entretien</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Ne rouille pas, ne pourrit pas. L'aluminium conserve son éclat d'origine sans aucun besoin de peinture ou de rénovation périodique.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '16px', borderLeft: '4px solid var(--color-primary)' }}>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Légèreté & Solidité</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Un rapport résistance/poids exceptionnel qui n'alourdit pas votre structure tout en supportant les conditions climatiques extrêmes.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '16px', borderLeft: '4px solid var(--color-primary)' }}>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Éco-responsable</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Un matériau 100% recyclable à l'infini. Opter pour l'aluminium, c'est aussi faire un geste concret pour l'environnement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 className="section-title">Nos Couleurs & Finitions</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 50px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Personnalisez vos éléments à l'infini : Choisissez parmi un large nuancier de teintes modernes et intemporelles pour harmoniser votre projet. Nos finitions sont disponibles en mat, brillant, sablé ou imitation bois.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {colors.map(color => (
              <span key={color} style={{ padding: '14px 24px', border: '1px solid var(--color-border)', borderRadius: '30px', backgroundColor: 'var(--color-bg-main)', fontSize: '1.1rem', fontWeight: '500', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                {color}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(to top, rgba(212, 175, 55, 0.05), transparent)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Vous avez un projet en tête ?</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Contactez notre atelier pour échanger sur vos besoins. Nos experts se déplacent pour un métré précis et un accompagnement total.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
            Obtenir une consultation gratuite <ArrowRight className="btn-icon" />
          </Link>
        </div>
      </section>
    </>
  );
}
