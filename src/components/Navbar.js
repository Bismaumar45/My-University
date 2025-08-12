import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1rem 2rem 1rem 1.5rem',
      backgroundColor: 'transparent',
      color: 'white',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // Left align
      backdropFilter: 'blur(5px)',
    }}
  >
    <h2 style={{ marginRight: '2rem' }}>My University</h2>
    <Link to="/" style={linkStyle}>Home</Link>
    <Link to="/about" style={linkStyle}>About</Link>
    <Link to="/courses" style={linkStyle}>Courses</Link>
    <Link to="/contact" style={linkStyle}>Contact</Link>
    <Link to="/signin" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Sign In</Link>

  </nav>
);

const linkStyle = {
  color: 'white',
  marginRight: '1.2rem',
  textDecoration: 'none',
  fontSize: '1rem',
};

export default Navbar;
