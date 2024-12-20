import React, {useState} from 'react';
import customerStoriesImage from './image/remember-geocities-v0-3s6mvjw8l4lc1.png'; 

const Solutions = ({isVisible}) => {
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

  const solutionsStyle = {
    position: 'absolute',
    top: '60px', // Adjust to be just below the header (you can change this value)
    left: '0',
    right: '10px',
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

      <div style={solutionsStyle}
       // onMouseEnter={() => setIsHovered(true)} // Keep the popup visible when hovering
       // onMouseLeave={() => setIsHovered(false)} // Hide the popup when mouse leaves
      >
        <div style={columnStyle}>
        <h3>Job Roles</h3>
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
                }}>Red Team</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}
                >Blue Team</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Purple Team</a>
          </div>
      </div>
      <div style={columnStyle}>
      <h3>Industries</h3>
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
                }}>Government</a>

                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}
                >Finance</a>

                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Manufacturing</a>

                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Healthcare</a>

                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Consulting</a>
          </div>
      </div>
      <div style={columnStyle}>
      <h3>Use Cases</h3>
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
                }}>Technical onboarding and talent retention</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                }} href="#" style={{ color: 'white',textDecoration: 'none',}}
                >Team capabilities benchmarking and gap analysis</a>
                <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                 }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Internal and external candidate assessment</a>
                 <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                 }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Emerging threats and tactic response preparation</a>
                 <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                 }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Code vulnerability and risk mitigation</a>
                 <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                 }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Governance and compliance</a>
                 <a onMouseOver={(e) => {
                    e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                    e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = linkStyle.backgroundColor;
                    e.target.style.color = linkStyle.color;
                 }} href="#" style={{ color: 'white',textDecoration: 'none',}}>Real-time breach and crisis simulation</a>
          </div>        
      </div>
      <div style={columnStyle}>
      <h3>Customer Stories</h3>
            
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
            src = {customerStoriesImage} 
            alt="Customer Stories" 
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

export default Solutions;
