import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: 'relative', background: 'linear-gradient(to top, #0a58ca, #1b1b1b)', color: 'white', textAlign: 'center', padding: '4rem 1rem 2rem' }}>
      {/* Wave SVG background */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: 0,
        width: '100%',
        height: '60px',
        background: `url('https://svgshare.com/i/uLQ.svg') no-repeat center`,
        backgroundSize: 'cover',
        zIndex: 0
      }} />

      {/* Social Icons */}
      <div style={{
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.2rem',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        <FaFacebook style={{ cursor: 'pointer' }} />
        <FaTwitter style={{ cursor: 'pointer' }} />
        <FaLinkedin style={{ cursor: 'pointer' }} />
        <FaInstagram style={{ cursor: 'pointer' }} />
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</a>
        <a href="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Services</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Team</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
        ©{year} My University | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
