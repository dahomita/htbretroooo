import React from 'react';
import bookingcom from './image/bookingcom-1.png';
import statefarm from './image/1920_sf-logo-vertical-reversed.png';
import securityrisk from './image/301802730_404660791801222_6250245496042440114_n.jpg';
import puma from './image/puma-logo-png-transparent.png';
import nyu from './image/new-york-university.jpg';
import deloitte from './image/partner-deloitte.jpg';
import intel from './image/images.png';
import siemens from './image/siemens.png';
import adeptis from './image/images.jpeg';
import aws from './image/KRgw2UkV_400x400.jpg';
import synack from './image/synack-logo-vertical-blue-black-RGB-nasdaq.png';
import faraday from './image/images (1).png';
import nordea from './image/images (2).png';
import nviso from './image/attachment_132472488.jpeg';
import usf from './image/unnamed.png';


const partners = [
  {
    name: 'Booking.com.',
    logo: bookingcom,
    description: 'Global travel platform for seamless bookings.',
  },
  {
    name: 'StateFarm',
    logo: statefarm,
    description: 'Trusted insurance provider for life uncertainties',
  },
  {
    name: 'Security Risk',
    logo: securityrisk, 
    description: 'Mitigating threats, safeguarding digital assets.',
  },
  {
    name: 'PUMA',
    logo: puma,
    description: 'Sporty footwear, apparel, and accessories.',
  },
  {
    name: 'NYU',
    logo: nyu,
    description: 'Innovation-driven education and global research.',
  },
  {
    name: 'Deloitte.',
    logo: deloitte,
    description: 'Expert in network defense systems.',
  },
  {
    name: 'intel',
    logo: intel,
    description: 'Innovating advanced technology for global progress.',
  },
  {
    name: 'SIEMENS',
    logo: siemens,
    description: 'Transforming industries with innovative engineering solutions.',
  },
  {
    name: 'Adeptis',
    logo: adeptis,
    description: 'Specialists in cybersecurity recruitment and talent.',
  },
  {
    name: 'AWS',
    logo: aws,
    description: 'Cloud computing services for scalable solutions.',
  },
  {
    name: 'Synack',
    logo: synack,
    description: 'Crowdsourced security testing for vulnerability discovery.',
  },
  {
    name: 'Faraday',
    logo: faraday,
    description: 'Collaborative penetration testing and vulnerability management platform.',
  },
  {
    name: 'Nordea',
    logo: nordea, 
    description: 'Leading financial services group in Northern Europe.',
  },
  {
    name: 'nviso',
    logo: nviso, 
    description: 'Cybersecurity consultancy specializing in risk management.',
  },
  {
    name: 'USF',
    logo: usf,
    description: 'Leading university focused on innovation and research.',
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
