import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration, affix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const endVal = parseInt(end.replace(/[^0-9]/g, ''));
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      // easeOutExpo effect
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(easeProgress * endVal);
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endVal);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{affix}</span>;
};

export default function AnimatedStats() {
  return (
    <section className="stats-section" style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', textAlign: 'center' }}>
        <div>
          <h3 style={{ fontSize: '3rem', color: 'var(--color-primary)', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            <AnimatedCounter end="320" duration={2000} />
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', margin: 0 }}>Projets réussis</p>
        </div>
        <div>
          <h3 style={{ fontSize: '3rem', color: 'var(--color-primary)', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            <AnimatedCounter end="7" duration={1500} />
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', margin: 0 }}>Membres d'équipe professionnelle</p>
        </div>
        <div>
          <h3 style={{ fontSize: '3rem', color: 'var(--color-primary)', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            <AnimatedCounter end="180" duration={2000} affix="+" />
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', margin: 0 }}>Clients satisfaits</p>
        </div>
        <div>
          <h3 style={{ fontSize: '3rem', color: 'var(--color-primary)', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            <AnimatedCounter end="10" duration={1500} affix="+" />
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', margin: 0 }}>Années d'expérience</p>
        </div>
      </div>
    </section>
  );
}
