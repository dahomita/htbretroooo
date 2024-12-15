import React, {useState} from 'react';
import whyHTBImage from './image/top-10-worst-90s-website-designs-1.png'; 

const Company= ({isVisible}) => {
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

  const companyStyle = {
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

      <div style={companyStyle}
       // onMouseEnter={() => setIsHovered(true)} // Keep the popup visible when hovering
       // onMouseLeave={() => setIsHovered(false)} // Hide the popup when mouse leaves
      >
        <div style={columnStyle}>
        <h3>Company</h3>
            <div style={eachColumnStyle}>
                <a href="#"
                style={{ color: 'white',textDecoration: 'none',}}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }}>About us</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}
                >Careers</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Social Impact</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Brand Guidelines</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Certificate Validation</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Legal</a>
          </div>
      </div>
      <div style={columnStyle}>
      <h3>Contact us</h3>
            <div style={eachColumnStyle}>
                <a href="#"
                style={{ color: 'white',textDecoration: 'none',}}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }}>Press</a>

                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}
                >Partners</a>

                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Enterprise Sales</a>

            
          </div>
      </div>
      <div style={columnStyle}>
      <h3>Why Hack The Box?</h3>
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
            src = {whyHTBImage} 
            alt="Whyhtb Image" 
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
                }}>View all customer stories</a>
            </div>
      
      </div>
      
      </div>
    </div>
  );
};

export default Company;
