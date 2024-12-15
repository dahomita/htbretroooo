import React, {useState} from 'react';


const Header = ({
  onSolutionsHover, 
  onProductsHover,  
  onResourcesHover, 
  onCompanyHover,
  onBusinessHover,
}) => {

  const headerStyle = {
    backgroundColor: 'black',
    color: 'lime',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Courier New, monospace',
    borderBottom: '2px solid lime',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingRight: '10px', 
    gap: '10px',
    position: 'relative', 
  };

  const marqueeStyle = {
    color: 'yellow',
    fontSize: '18px',
    margin: '2px 0',
  };
  const centerContainerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center', 
    textAlign: 'center', 
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  };

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

  const buttonStyle = {
    color: 'lime',
    backgroundColor: 'black',
    border: '2px solid lime',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: 'lime',
    color: 'black',
  };

  return (
    <header >
    <div style={headerStyle} >
      <div style={centerContainerStyle}>
        <h1 >Hack The Box</h1>
        <marquee style={marqueeStyle} scrollamount="5">
            Your Cyber Center
        </marquee>
      </div>
    </div>
        
    <div style={headerStyle}>
        <a
                href="#"
                style={buttonStyle}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    e.target.style.color = buttonHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                    e.target.style.color = buttonStyle.color;
                }}
                >
                Login
                </a>
                <a
                href="#"
                style={buttonStyle}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    e.target.style.color = buttonHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                    e.target.style.color = buttonStyle.color;
                }}
                >
                Get Started
                </a>
    </div>
      
      <nav style={navStyle}>
      
      <a
          href="#"
          style={linkStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.target.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = linkStyle.backgroundColor;
            e.target.style.color = linkStyle.color;
          }}
          onMouseEnter={() => onProductsHover(true)} //Trigger visibility on hover
        >
          Products
        </a>
      
            <a
                href="#"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
                  e.target.style.color = linkHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = linkStyle.backgroundColor;
                  e.target.style.color = linkStyle.color;
                }}
                onMouseEnter={() => onSolutionsHover(true)} //Trigger visibility on hover
                // onMouseLeave={() => onSolutionsHover(false)} // Hide on mouse leave
                >
                Solutions
                </a>
          
                <a
          href="#"
          style={linkStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.target.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = linkStyle.backgroundColor;
            e.target.style.color = linkStyle.color;
          }}
  
        >
          Pricing
        </a>
        <a
          href="#"
          style={linkStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.target.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = linkStyle.backgroundColor;
            e.target.style.color = linkStyle.color;
          }}
          onMouseEnter={() => onResourcesHover(true)} //Trigger visibility on hover

        >
          Resources
        </a>
        <a
          href="#"
          style={linkStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.target.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = linkStyle.backgroundColor;
            e.target.style.color = linkStyle.color;
          }}
          onMouseEnter={() => onCompanyHover(true)}
        >
          Company
        </a>
        <a
          href="#"
          style={linkStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.target.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = linkStyle.backgroundColor;
            e.target.style.color = linkStyle.color;
          }}
          onMouseEnter={() => onBusinessHover(true)}
        >
          Business
        </a>
        
        
      </nav> 
      
      </header>
  );
};

export default Header;
