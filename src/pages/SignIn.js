import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <>
      <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550611343-63ba251eaeb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '0 2rem',
          }}
        >
        <p style={{ fontSize: '1.3rem', maxWidth: '600px' }}>
        Excellence in education, innovation, and research. Explore our programs and be part of a dynamic future.
      </p>
      <a
          href="/"
          style={{
            marginTop: '2rem',
            padding: '12px 24px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007bff',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}
        >
          Explore University
        </a></div>      
      <div className="signin-container">
        <h1>Sign In</h1>
        <form className="signin-form">
          <div className="form-group">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>

          <div className="form-group full">
            <input type="email" placeholder="Enter email" required />
            <small className="helper-text">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group full">
            <input type="text" placeholder="Your address" required />
          </div>

          <div className="form-group">
            <select required>
              <option value="">Select Location</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <input type="text" placeholder="Postcode" required />
          </div>

          <div className="form-group full">
            <textarea placeholder="Your Message" required></textarea>
          </div>

          <div className="form-group full">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
   </>
  );
};

export default SignIn;
