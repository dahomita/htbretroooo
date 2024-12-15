import React, {useState} from 'react';
import freeTrialImage from './image/Header2.png'; 
import getInTouchImage from './image/space.png'

const Business= ({isVisible}) => {
    const [isHovered, setIsHovered] = useState(false);
  const containerStyle = {
    display: 'flex', // Flexbox to align divs side by side
    justifyContent: 'space-between', // Space between columns
    alignItems: 'stretch', // Stretch columns to the same height
    gap: '10px', // Optional spacing between columns
    padding: '20px',
  };

  const columnStyle = {
    flex: '1', // Each column takes equal width
    border: '2px solid lime', // Add border for visibility
    backgroundColor: 'black',
    color: 'lime',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Courier New, monospace', 
  };
  const eachColumnStyle ={
    flex: '1', // Each column takes equal width
  
    display: 'flex', // Use Flexbox for horizontal alignment
  alignItems: 'center', // Vertically center items
  justifyContent: 'center', // Horizontally center items
  whiteSpace: 'nowrap', // Prevent text wrapping
  overflow: 'hidden', // Prevent overflow of long content
  gap: '10px', 
  flexDirection: 'column', // Arrange items vertically
  }
  
  const linkStyle = {
    color: 'lime',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: '2px solid lime',
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'black',
  };

  const linkHoverStyle = {
    backgroundColor: 'lime',
    color: 'black',
  };

  const businessStyle = {
    position: 'absolute',
    top: '60px', // Adjust to be just below the header (you can change this value)
    left: '0',
    width: '100%',
    height: '100vh', // Full height to cover the content below
    backgroundColor: 'black',
    color: 'lime',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Courier New, monospace',
    transition: 'transform 0.5s ease-in-out',
    transform: isVisible || isHovered ? 'translateY(0)' : 'translateY(-200%)', // Slide down effect
    zIndex: 10, // Ensure it appears above other content
  };
  return (
    <div style={containerStyle}>

      <div style={businessStyle}
       // onMouseEnter={() => setIsHovered(true)} // Keep the popup visible when hovering
       // onMouseLeave={() => setIsHovered(false)} // Hide the popup when mouse leaves
      >
        <div style={columnStyle}>
        <h3>Start free trial</h3>
        <div style={eachColumnStyle}>
        <a href="#"
            onMouseOver={(e) => {
                e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                e.target.style.color = linkHoverStyle.color;
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = linkStyle.backgroundColor;
                e.target.style.color = linkStyle.color;
            }}>
            <img 
            src = {freeTrialImage} 
            alt="Freetrial Image" 
            style={{ width: '50%', height: 'auto', marginBottom: '10px' }} 
        /> </a>
                <a href="#"
                style={{ color: 'white',}}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }}>Our all-in-one cyber readiness platform free for 14 days</a>
                
          </div>
      </div>
      <div style={columnStyle}>
      <h3>Get a demo</h3>
            <div style={eachColumnStyle}>
            <a href="#"
            onMouseOver={(e) => {
                e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                e.target.style.color = linkHoverStyle.color;
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = linkStyle.backgroundColor;
                e.target.style.color = linkStyle.color;
            }}>
            <img 
            src = {getInTouchImage} 
            alt="getInTouch Image" 
            style={{ width: '50%', height: 'auto', marginBottom: '10px' }} 
        /> </a>
                <a href="#"
                style={{ color: 'white',}}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }}>Get in touch with our team of experts for a tailored solution</a>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Business;
