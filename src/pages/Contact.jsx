import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FAQ from '../components/FAQ';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <>
      <PageHeader 
        title="Nous contacter" 
        subtitle="Obtenez une consultation gratuite et un devis personnalisé." 
        startTime={55}
      />

      
      <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container contact-info-bar">
          <div>
            <div style={{ color: 'var(--color-primary)', marginBottom: '12px' }}><MapPin size={32} /></div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Notre adresse</h4>
            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>KM 20 route de Fes à Marrakech</p>
          </div>
          <div>
            <div style={{ color: 'var(--color-primary)', marginBottom: '12px' }}><Phone size={32} /></div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Numéro de téléphone</h4>
            <p style={{ margin: 0 }}>
              <a href="tel:+212661562140" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}>
                +212 661 562 140
              </a>
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--color-primary)', marginBottom: '12px' }}><Mail size={32} /></div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Adresse E-mail</h4>
            <p style={{ margin: 0 }}>
              <a href="mailto:couvertinealuminiummaroc@gmail.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}>
                couvertinealuminiummaroc@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="contact-section" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Prêt à démarrer votre projet ?</h2>
              <p className="contact-text">
                Remplissez notre formulaire ou contactez-nous directement par téléphone ou par e-mail.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="contact-method-title">Téléphone</h4>
                    <a href="tel:+212661562140" className="contact-method-link">+212 661 562 140</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="contact-method-title">Email</h4>
                    <a href="mailto:couvertinealuminiummaroc@gmail.com" className="contact-method-link">couvertinealuminiummaroc@gmail.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="contact-method-title">Adresse</h4>
                    <p className="contact-method-link">KM 20 route de Fes à Marrakech</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">Obtenez une consultation gratuite</h3>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Votre nom *" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Votre e-mail *" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-input" placeholder="Votre Téléphone *" required />
              </div>
              <div className="form-group">
                <textarea className="form-input form-textarea" placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
      <FAQ questions={[
        { question: "En combien de temps recevrai-je mon devis ?", answer: "Nous répondons sous 24h ouvrées. Nos techniciens peuvent se déplacer sur site pour une étude gratuite." },
        { question: "Le devis est-il payant ?", answer: "Non, toutes nos études et devis sont 100% gratuits et sans engagement, partout au Maroc." },
        { question: "Acceptez-vous les petits projets ?", answer: "Nous équipons aussi bien les maisons individuelles (murets, fenêtres) que les grands chantiers industriels." }
      ]} />
    </>
  );
}
