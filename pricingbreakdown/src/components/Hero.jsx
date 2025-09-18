import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Professional <span className="highlight">Tech Demo</span> Videos</h1>
          <p>Amsterdam-based freelancer creating compelling software demonstrations that drive conversions and showcase your technology with precision</p>
          <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
