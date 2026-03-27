import React from 'react';

const PageHeader = ({ title, subtitle, startTime = 0 }) => {
  const videoUrl = `https://www.youtube.com/embed/ZfSzKrKHd-k?autoplay=1&mute=1&loop=1&playlist=ZfSzKrKHd-k&start=${startTime}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1`;

  return (
    <header className="hero" style={{ minHeight: '60vh' }}>
      <div className="hero-video-wrapper">
        <iframe 
          src={videoUrl}
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          title="Background Video"
          className="hero-video"
        ></iframe>
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)'}}>
          {title}
        </h1>
        {subtitle && (
          <p className="hero-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};


export default PageHeader;
