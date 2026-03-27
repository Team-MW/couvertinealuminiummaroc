import React, { useState, useEffect } from 'react';

const Preloader = ({ duration = 2800, isTriggered = true }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isTriggered) {
      setLoading(true);
      setFadeOut(false);

      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, Math.max(0, duration - 600));

      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, duration);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [isTriggered, duration]);

  if (!loading) return null;

  return (
    <div 
      id="preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0a0a0c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible'
      }}
    >
      <div className="preloader-content" style={{ textAlign: 'center' }}>
        <img 
          src="/logo.webp" 
          alt="Logo" 
          style={{ 
            height: '120px', 
            marginBottom: '30px',
            animation: 'pulseGlow 2.5s infinite ease-in-out' 
          }} 
        />
        <div style={{
          width: '200px',
          height: '1px',
          backgroundColor: 'rgba(255, 204, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '15px',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'absolute',
            width: '60%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
            animation: 'shimmer 1.5s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95)'
          }}></div>
        </div>
        <p style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255, 204, 0, 0.7)', fontWeight: '600' }}>Couvertine Aluminium Maroc</p>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(255, 204, 0, 0)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 15px rgba(255, 204, 0, 0.3)); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};




export default Preloader;
