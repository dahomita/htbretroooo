import React, {useState} from 'react';
import giftImage from './image/pQT0l.gif';
const GiftComponent = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

  // Data for multiple blog boxes
  const blogBoxes = [
    {
      title: 'Silas Francisco, Lead Penetration Tester, SIEMENS',
      content:  'I strongly recommend this service to teams composed of dedicated persons, who love the technical aspects of penetration testing and also enjoy assisted self-study.',
    },
    {
      title: 'Christian Adounvo, Head of Offensive Security, NortonLifeLook',
      content: 'The lab was fully dedicated. The HTB support team has been excellent to make the training fit our needs.',
    },
    {
      title: 'Richard Kaufmann, Information Security Professional, Amedisys',
      content: 'The Box has enabled our security engineers a deeper understanding on how adversaries work in a real world envrionment.',
    },
    {
      title: 'John Ao, L3 SOC Analyst, Dassault Systemes',
      content: 'HTB Academy helps our team gain that knowledge at their own pace, by providing quality and easy-to-follow content.',
    },
    {
      title: 'Firat Acar, Red Team Cybersecurity Consultant at NVISO',
      content: 'By making use of the Enterprise platform and Hack The Box Academy, we have been able to onboard new joiners more efficiently and promote internal mobility for our security assessments team.',
    },
  ];
    // Function to handle scroll button click
  const handleScroll = (direction) => {
    if (direction === 'next') {
      setScrollIndex((prevIndex) => (prevIndex + 1) % blogBoxes.length);
    } else {
      setScrollIndex((prevIndex) => (prevIndex - 1 + blogBoxes.length) % blogBoxes.length);
    }
  };
  return (
    <div style={{ 
        display: 'flex', 
        aliginItems: 'center', 
        padding: '20px',
        justifyItems: 'center',
        justifyContent: 'center',
         }}>
      <img 
        src={giftImage}
        alt="gift animation"
        style={{ 
            width: '45%', 
            display: 'flex',
            justifyContent: 'center', 
            aliginItems: 'center',
            height: '100%', 
            objectFit: 'cover' , 
            borderRadius: '5px',
            border: '5px solid black',
            margin: '30px',
            boxShadow: '4px 4px 0 lime'
        }} 
      />
      {/* 90s Style Blog Section */}
      <div style={{
        //width: '45%',
        padding: '20px',
        backgroundColor: 'black', 
        border: '5px solid lime', 
        fontFamily: '"Press Start 2P", monospace', 
        color: '#FFFFFF', // White text
        textAlign: 'center',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        fontSize: '16px',
        lineHeight: '1.5',
        overflowX: 'auto', // Allow horizontal scrolling
      }}>
        <h2 style={{
          fontSize: '24px',
          color: 'lime', // Yellow title for contrast
          textDecoration: 'underline',
          fontWeight: 'bold',
        }}>
          Loved by hackers. <br />
          Trusted by organizations.
        </h2>

        {/* Blog Box Container */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '20px',
          overflowX: 'auto',
          padding: '10px 0',
        }}>
          {/* Display the current blog box */}
          <div style={{
            width: '300px',
            padding: '20px',
            backgroundColor: '#FFFF00',
            border: '3px solid lime',
            borderRadius: '10px',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
          }}>
            <h3 style={{ fontSize: '18px', color: '#0000FF' }}>{blogBoxes[scrollIndex].title}</h3>
            <p style={{ fontSize: '14px', color: '#000' }}>{blogBoxes[scrollIndex].content}</p>
          </div>
        </div>

        {/* Scroll Buttons */}
        <div style={{ marginTop: '20px', }}>
          <button
            onClick={() => handleScroll('prev')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'lime',
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginRight: '10px',
              fontFamily: '"Press Start 2P", monospace',
            }}
          >
            Previous
          </button>
          <button
            onClick={() => handleScroll('next')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'lime',
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: '"Press Start 2P", monospace',
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftComponent;
