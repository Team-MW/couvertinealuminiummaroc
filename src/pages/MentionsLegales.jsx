import React from 'react';
import PageHeader from '../components/PageHeader';

export default function MentionsLegales() {
  return (
    <>
      <PageHeader 
        title="Mentions Légales" 
        subtitle="Informations légales concernant le site et l'entreprise" 
        startTime={110}
      />


      <section style={{ padding: '80px 0', color: 'var(--color-text-main)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Éditeur du site</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              <strong>Couvertine Aluminium Maroc</strong><br />
              <strong>Adresse :</strong> Marrakech, Maroc<br />
              <strong>Téléphone :</strong> +212 661 562 140<br />
              <strong>Email :</strong> info@couvertinealuminiummaroc.com<br /><br />
              <strong>Responsable de publication :</strong><br />
              Couvertine Aluminium Maroc
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Propriété intellectuelle</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Le contenu du site (textes, images, logos, vidéos, éléments graphiques) est la propriété exclusive de Couvertine Aluminium Maroc, sauf mention contraire.<br /><br />
              Toute reproduction, diffusion ou utilisation, totale ou partielle, sans autorisation préalable est strictement interdite.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Responsabilité</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Couvertine Aluminium Maroc s’efforce d’assurer l’exactitude et la mise à jour des informations présentes sur le site.<br /><br />
              Cependant, des erreurs ou omissions peuvent survenir. L’entreprise ne saurait être tenue responsable d’éventuels dommages directs ou indirects résultant de l’utilisation du site.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Liens externes</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Le site peut contenir des liens vers d’autres sites. Couvertine Aluminium Maroc décline toute responsabilité concernant le contenu ou les pratiques de ces sites tiers.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
