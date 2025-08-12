import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const campuses = [
  {
    city: 'Lahore Campus',
    address: '123 Gulberg III, Lahore, Pakistan',
    phone: '+92 300 1234567',
    email: 'lahore@university.com'
  },
  {
    city: 'Karachi Campus',
    address: '456 Clifton Block 5, Karachi, Pakistan',
    phone: '+92 300 9876543',
    email: 'karachi@university.com'
  },
  {
    city: 'Islamabad Campus',
    address: '789 F-8 Markaz, Islamabad, Pakistan',
    phone: '+92 300 7654321',
    email: 'islamabad@university.com'
  }
];

const Contact = () => {
  return (
    <>
    <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '0 5rem',
          }}
        >      
          <h1>Contact Us</h1>
        </div> 
    <div className="contact-section">
      <h2>Our Campuses</h2>
      <div className="campus-grid">
        {campuses.map((campus, index) => (
          <div className="campus-card" key={index}>
            <h3>{campus.city}</h3>
            <div className="info-item"><FaMapMarkerAlt /> {campus.address}</div>
            <div className="info-item"><FaPhoneAlt /> {campus.phone}</div>
            <div className="info-item"><FaEnvelope /> {campus.email}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Contact;
