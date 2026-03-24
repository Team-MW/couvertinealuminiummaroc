import React from 'react';
import { Package, Maximize, Droplet, Sun, LayoutPanelTop } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <LayoutPanelTop size={40} />,
      title: "Couvertine en aluminium 10/10ème",
      desc: "Cette couvertine se distingue par sa résistance à la corrosion et aux variations climatiques, assurant une durabilité accrue sans nécessiter d’entretien régulier. Disponible en plusieurs finitions et coloris, souvent avec un revêtement laqué, elle s’intègre harmonieusement à l’esthétique de tous types de constructions."
    },
    {
      icon: <Maximize size={40} />,
      title: "Lambris en aluminium / Façades",
      desc: "Idéal pour habiller les murs et les plafonds aussi bien en intérieur qu’en extérieur. Conçu à partir d’aluminium haute qualité, il se distingue par sa résistance exceptionnelle aux intempéries, à l’humidité et à la corrosion, en faisant un choix parfait pour les environnements exposés comme les façades, les sous-toitures et les vérandas."
    },
    {
      icon: <Droplet size={40} />,
      title: "Boîte à eau et descente d'eau pluviales",
      desc: "La boîte à eau permet de collecter et de diriger efficacement les eaux pluviales vers les descentes, tout en évitant les débordements. Disponible en plusieurs formes et dimensions, avec des finitions laquées ou anodisées qui s’harmonisent parfaitement avec l’esthétique de la façade."
    },
    {
      icon: <Package size={40} />,
      title: "Appui de fenêtre en aluminium",
      desc: "Conçu en aluminium, ce dispositif se distingue par sa légèreté, sa robustesse et sa résistance à la corrosion, garantissant une longue durée de vie sans entretien particulier."
    },
    {
      icon: <Shield size={40} />,
      title: "Étanchéité",
      desc: "Application de revêtements professionnels pour garantir une protection optimale de vos toitures et terrasses. Elle joue un rôle essentiel dans le domaine de la construction, garantissant la durabilité et la sécurité des bâtiments."
    }
  ];

  const colors = [
    "Blanc", "Sable", "Noir", "Marron (RAL 8017)", "Gris alu (RAL 9006)", "Anthracite", "Bordeaux", "Brique", "Cuivre", "Vert Réséda", "Vert Sapin"
  ];

  return (
    <>
      <div style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h1 className="section-title">Nos Services</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Découvrez notre gamme complète d'habillages en aluminium</p>
      </div>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {services.map((srv, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap', backgroundColor: 'var(--color-bg-secondary)', padding: '40px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <div style={{ color: 'var(--color-primary)', background: 'rgba(212,175,55,0.1)', padding: '20px', borderRadius: '12px' }}>
                  {srv.icon}
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 className="section-title">Nos Couleurs & Finitions</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
            Choisissez parmi un large nuancier de teintes modernes et intemporelles pour harmoniser votre projet. Nos finitions sont disponibles en mat, brillant ou imitation bois.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {colors.map(color => (
              <span key={color} style={{ padding: '10px 20px', border: '1px solid var(--color-border)', borderRadius: '30px', backgroundColor: 'var(--color-bg-main)' }}>
                {color}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Vous avez un projet en tête ?</h2>
          <Link to="/contact" className="btn btn-primary">Obtenir une consultation gratuite</Link>
        </div>
      </section>
    </>
  );
}

// Importing shield locally here due to lucide missing it in the specific destructure above.
import { Shield } from 'lucide-react';
