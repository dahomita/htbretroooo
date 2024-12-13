import React, {useState} from 'react';


const Header = () => {

  const [isHovered, setIsHovered] = useState(false);

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

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'black',
    color: 'lime',
    border: '2px solid lime',
    padding: '10px',
    textAlign: 'center',
    transition: 'height 0.5s ease-in-out',
    height: isHovered ? '200px' : '0', // Slide effect
    overflow: 'hidden',
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
        >
          Products
        </a>
        <nav
            style={navStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
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
                Solutions
                </a>
            <div style={dropdownStyle}>
                <p>Product 1</p>
                <p>Product 2</p>
                <p>Product 3</p>
            </div>
        </nav>
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
        >
          Business
        </a>
        
      </nav>
      </header>
  );
};

export default Header;
