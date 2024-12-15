import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'lime',
        padding: '20px',
        textAlign: 'center',
        fontFamily: '"Courier New", monospace', // Retro font
        borderTop: '4px solid lime',
      }}
    >
      {/* Footer Title */}
      <h2
        style={{
          fontSize: '24px',
          margin: '0',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        Hack The Box
      </h2>

      {/* Footer Navigation */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '15px',
        }}
      >
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/solutions" style={linkStyle}>
          Solutions
        </a>
        <a href="/products" style={linkStyle}>
          Products
        </a>
        <a href="/careers" style={linkStyle}>
          Careers
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </nav>

      {/* Retro Divider */}
      <div
        style={{
          borderTop: '2px dotted lime',
          margin: '20px auto',
          width: '80%',
        }}
      ></div>

      {/* Footer Text */}
      <p style={{ fontSize: '14px', margin: '10px 0' }}>
        &copy; {new Date().getFullYear()} Hack The Box. All rights reserved.
      </p>
      <p style={{ fontSize: '12px', color: 'lime' }}>
        Level up your cyber skills with us!
      </p>
    </footer>
  );
};

// Link Styles
const linkStyle = {
  color: 'lime',
  textDecoration: 'none',
  fontSize: '16px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

export default Footer;
