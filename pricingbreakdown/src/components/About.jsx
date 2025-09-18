import React from 'react';

const About = () => {
  const stats = [
    { number: '3', label: 'Enterprise Clients' },
    { number: '20', label: 'Videos Produced' },
    { number: '72hrs', label: 'Rush Delivery' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">Professional Excellence</h2>
          <p>As an Amsterdam-based video production specialist, I combine deep technical expertise with strategic marketing insight to create tech demonstrations that convert prospects into customers.</p>
          <p>Every production is engineered for maximum impact, utilizing proven psychological triggers and cutting-edge visual techniques that resonate with decision-makers in the Dutch and European technology sectors.</p>
          
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <span className="stat-number">{stat.number}</span>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
