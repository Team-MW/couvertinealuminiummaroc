import React from 'react';
import FAQ from '../components/FAQ';
import PageHeader from '../components/PageHeader';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageHeader 
        title="Politique de Confidentialité" 
        subtitle="Votre vie privée nous tient à cœur" 
        startTime={140}
      />


      <section style={{ padding: '80px 0', color: 'var(--color-text-main)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              Chez <strong>Couvertine Aluminium Maroc</strong>, la protection de vos données personnelles est une priorité. Nous recueillons uniquement les informations strictement nécessaires pour répondre à vos demandes.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>1. Données collectées</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Lorsque vous remplissez un formulaire de contact, nous pouvons collecter les informations suivantes :<br /><br />
              • Nom et prénom<br />
              • Adresse e-mail<br />
              • Numéro de téléphone<br />
              • Message<br /><br />
              Ces données sont utilisées uniquement pour répondre à vos demandes d’informations ou de devis.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>2. Utilisation des données</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Vos informations ne sont jamais vendues ni partagées avec des tiers. Elles sont conservées uniquement le temps nécessaire pour traiter votre demande.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>3. Sécurité des données</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Nous mettons tout en œuvre pour assurer la sécurité de vos données grâce à des outils de protection conformes aux bonnes pratiques (connexion sécurisée HTTPS, hébergement fiable, accès restreint).
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>4. Vos droits</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à :<br />
              📧 <strong>info@couvertinealuminiummaroc.com</strong>
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>5. Cookies</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
              Notre site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ni de suivi n’est installé.
            </p>
          </div>
          
        </div>
      </section>
      <FAQ questions={[
        { question: "Mes données sont-elles partagées ?", answer: "Jamais. Vos coordonnées servent exclusivement à nos techniciens pour préparer votre devis." },
        { question: "Comment supprimer mes informations ?", answer: "Envoyez-nous simplement un email et nous supprimerons toutes vos données de notre base de contact immédiatement." }
      ]} />
    </>
  );
}
