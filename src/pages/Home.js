import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this
import './Home.css';

const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D')",
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>My University</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px' }}>
          Excellence in education, innovation, and research. Explore our programs and be part of a dynamic future.
        </p>
        <a
          href="/courses"
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
          Explore Courses
        </a>
      </div>

      {/* Location Section */}
      <div className="location-grid" style={{ padding: '2rem' }}>
        {[
          {
            name: 'Lahore',
            image: 'https://images.unsplash.com/photo-1559135197-8a45ea74d367?w=600&auto=format&fit=crop&q=60',
            link: '/lahore',
          },
          {
            name: 'Karachi',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=60',
            link: '/lahore',

          },
          {
            name: 'Islamabad',
            image: 'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?w=600&auto=format&fit=crop&q=60',
            link: '/lahore',

          },
        ].map((city, index) => {
          const card = (
            <div className="location-card" key={index}>
              <img src={city.image} alt={city.name} />
              <div className="overlay">
                <h3>{city.name}</h3>
                <p>Explore our {city.name} campus</p>
              </div>
            </div>
          );

          return city.link ? (
            <Link to={city.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              {card}
            </Link>
          ) : (
            card
          );
        })}
      </div>
    </div>
  );
};

export default Home;
