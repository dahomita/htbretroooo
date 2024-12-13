import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'lime',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Courier New, monospace',
    borderBottom: '2px solid lime',
  };

  const marqueeStyle = {
    color: 'yellow',
    fontSize: '18px',
    margin: '5px 0',
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

  return (
    <header style={headerStyle}>
      <h1>Hack The Box</h1>
      <marquee style={marqueeStyle} scrollamount="5">
        Welcome to Hack The Box - Where hackers thrive!
      </marquee>
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
          Home
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
          Challenges
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
          Leaderboard
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
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
