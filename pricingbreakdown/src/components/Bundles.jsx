import React from 'react';

const Bundles = () => {
  const bundles = [
    {
      title: 'Startup Bundle',
      price: '€2,000',
      savings: 'Save €250',
      features: [
        '3x Quick Demo videos for key features',
        'Custom logo animation sequence',
        'Social media optimized versions',
        'Flexible 50% upfront payment',
        'Perfect for emerging companies'
      ],
      featured: false
    },
    {
      title: 'Growth Bundle',
      price: '€4,200',
      savings: 'Save €500',
      features: [
        '2x Professional Demo productions',
        '2x Quick Demo supplementary videos',
        'Branded video template library',
        '30-second teaser cut versions',
        'Strategic payment plan options'
      ],
      featured: true
    },
    {
      title: 'Enterprise Bundle',
      price: '€7,500',
      savings: 'Save €1,000',
      features: [
        '2x Premium Demo showcases',
        '3x Professional Demo series',
        'Multi-language version production',
        'Priority support & rush delivery',
        'Quarterly strategic consultation'
      ],
      featured: false
    }
  ];

  return (
    <section id="bundles" className="bundles">
      <div className="container">
        <h2 className="section-title">Strategic Bundle Packages</h2>
        <div className="bundle-grid">
          {bundles.map((bundle, index) => (
            <div key={index} className={`bundle-card ${bundle.featured ? 'featured' : ''}`}>
              <h3 className="bundle-title">{bundle.title}</h3>
              <div className="bundle-price">{bundle.price}</div>
              <div className="savings">{bundle.savings}</div>
              <ul className="service-features">
                {bundle.features.map((feature, featureIndex) => (
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

export default Bundles;
