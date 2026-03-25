import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)', padding: '20px 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '0' }}
      >
        <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-text-main)', fontWeight: '600' }}>{question}</h4>
        {isOpen ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} color="var(--color-primary)" />}
      </button>
      {isOpen && (
        <div style={{ marginTop: '16px', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', animation: 'fadeIn 0.3s ease' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ({ questions }) {
  return (
    <section className="faq-section" style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title" style={{ marginBottom: '50px' }}>Foire Aux Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {questions.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
