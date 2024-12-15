import React from 'react';
import bookingcom from './image/bookingcom-1.png';
import statefarm from './image/1920_sf-logo-vertical-reversed.png';
import securityrisk from './image/301802730_404660791801222_6250245496042440114_n.jpg';

const partners = [
  {
    name: 'Booking.com.',
    logo: bookingcom,
    description: 'Specializes in advanced threat detection.',
  },
  {
    name: 'StateFarm',
    logo: statefarm,
    description: 'Leading provider of endpoint security solutions.',
  },
  {
    name: 'Security Risk',
    logo: securityrisk, 
    description: 'Focuses on secure cloud-based services.',
  },
  {
    name: 'PUMA',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'NYU',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'Deloitte.',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'intel',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'SIEMENS',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'Adeptis',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'AWS',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'Synack',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'Faraday',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'Nordea',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'nviso',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
  {
    name: 'USF',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    description: 'Expert in network defense systems.',
  },
];

const Body = () => {
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: '"Press Start 2P", monospace', // Retro pixel font
        backgroundColor: 'yellow',
        color: 'lime',
      }}
    >
      {/* Title */}
      <h1
        style={{
          textAlign: 'center',
          color: 'lime',
          textShadow: '2px 2px #000',
          fontSize: '24px',
        }}
      >
        HTB Partners' Company
      </h1>

      {/* Partners Gallery */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            style={{
              width: '220px',
              textAlign: 'center',
              padding: '15px',
              border: '3px solid lime',
              borderRadius: '5px',
              backgroundColor: 'black',
              boxShadow: '4px 4px 0 #000',
            }}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                marginBottom: '10px',
                border: '2px solid lime',
                borderRadius: '5px',
              }}
            />
            <h3
              style={{
                fontSize: '16px',
                margin: '10px 0',
                color: 'lime',
                textShadow: '1px 1px #000',
              }}
            >
              {partner.name}
            </h3>
            <p
              style={{
                fontSize: '12px',
                color: 'white',
                textShadow: '1px 1px white',
              }}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
