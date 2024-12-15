import React from 'react';

const partners = [
  {
    name: 'CyberSecure Inc.',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Specializes in advanced threat detection.',
  },
  {
    name: 'TechDefend LLC',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Leading provider of endpoint security solutions.',
  },
  {
    name: 'SafeNet Solutions',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Focuses on secure cloud-based services.',
  },
  {
    name: 'ShieldPro Technologies',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
];

const Body = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>HTB Partners' Company</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {partners.map((partner, index) => (
          <div
            key={index}
            style={{
              width: '200px',
              textAlign: 'center',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }}
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{partner.name}</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
