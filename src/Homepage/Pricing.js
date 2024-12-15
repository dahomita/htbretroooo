import React from 'react';

// Import GIFs from the local folder
import gif1 from './image/200w (1).gif';
import gif2 from './image/200w (2).gif';
import gif3 from './image/kqga2v.gif';
import gif4 from './image/hacker-code.gif';

const Pricing = () => {
    const pricingPlans = [
        {
          name: 'LITE',
          price: '$250/seat per month',
          description: 'All the basics you need to create and upskill a threat-ready cyber team.',
          gif: gif1,
        },
        {
          name: 'BASE',
          price: 'Talk to Sales',
          description: 'Expand your lab access to excel in offensive and defensive cyber operations.',
          gif: gif2,
        },
        {
          name: 'PROFESSIONAL',
          price: 'Talk to Sales',
          description: 'Level-up with specialized courses and premium enterpise lab scenarios.',
          gif: gif3,
        },
        {
          name: 'ULTIMATE',
          price: 'Talk to Sales',
          description: 'Receive a personalized solution tailored to your company unique needs.',
          gif: gif4,
        },
      ];
    
      return (
        <div id="pricingSection" style={{ backgroundColor: 'yellow', padding: '40px 20px', fontFamily: 'monospace', color: 'lime' }}>
          <h1 style={{ fontFamily: 'monospace', textAlign: 'center', fontSize: '25px', color: 'lime', textShadow: '4px 4px 0 black' }}>
            Our Pricing Plans
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                style={{
                  width: '220px',
                  textAlign: 'center',
                  padding: '20px',
                  border: '5px solid lime',
                  borderRadius: '10px',
                  backgroundColor: 'black',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                  fontFamily: '"Press Start 2P", monospace',
                  color: '#fff',
                }}
              >
                <img
              src={plan.gif}
              alt={`${plan.name} GIF`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                marginBottom: '15px',
              }}
            />
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase' }}>{plan.name}</h3>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{plan.price}</p>
                <p style={{ fontSize: '14px', fontStyle: "Press Start 2P" }}>{plan.description}</p>
                <button
                  onClick={() => alert(`Booking demo for ${plan.name}`)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: 'yellow',
                    color: 'black',
                    border: '3px solid lime',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '16px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Book Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Pricing;
