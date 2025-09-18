import React from 'react';

const Contact = () => {
  const contactItems = [
    { icon: '📧', title: 'Email', content: 'hi@throttle-labs.com' },
    { icon: '📱', title: 'WhatsApp', content: '+31 6 XXXX XXXX' },
    { icon: '📍', title: 'Location', content: 'Amsterdam, Netherlands' },
    { icon: '⚡', title: 'Response Time', content: 'Within 2 hours' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>Let's discuss how strategic video content can accelerate your business growth</p>
        
        <div className="contact-info">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-item">
              <h3>{item.icon} {item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
