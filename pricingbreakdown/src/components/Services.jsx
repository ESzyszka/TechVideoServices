import React from 'react';

const Services = () => {
  const services = [
    {
      title: '🎯 Quick Demo',
      price: '€750',
      features: [
        '60-90 second professional video',
        'Screen recording with professional voiceover',
        'Strategic script development',
        'Clean transitions & branded overlays',
        '2 comprehensive revision rounds',
        '5-day expedited delivery'
      ]
    },
    {
      title: '🚀 Professional Demo',
      price: '€1,450',
      features: [
        '2-3 minute cinematic demonstration',
        'Advanced motion graphics & animations',
        'Professional voiceover + custom music',
        'Dynamic visual storytelling',
        'Strategic call-to-action integration',
        '3 detailed revision rounds',
        '7-day professional delivery'
      ]
    },
    {
      title: '💎 Premium Demo',
      price: '€2,800',
      features: [
        '3-5 minute premium cinematic production',
        'Live action elements & interviews',
        '3D graphics & advanced visual effects',
        'Custom music composition & sound design',
        'Multi-platform format optimization',
        '4 comprehensive revision rounds',
        '14-day premium delivery timeline'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Individual Video Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <div className="price">{service.price}</div>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
