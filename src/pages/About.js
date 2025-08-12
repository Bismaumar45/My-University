import React from 'react';
import {
  FaTrophy,
  FaSmile,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaStar,
} from 'react-icons/fa';

const About = () => {
  const heroImage =
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D';

  const activities = [
    {
      title: 'Research Conferences',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    },
    {
      title: 'Student Clubs & Societies',
      image:
        'https://plus.unsplash.com/premium_photo-1723906826500-13d20a006b0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    },
    {
      title: 'Annual Sports Week',
      image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d',
    },
    {
      title: 'Cultural Events',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    },
    {
      title: 'Industry Collaboration Projects',
      image:
        'https://images.unsplash.com/photo-1598520106896-fb5263f3bc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Guest Lectures & Seminars',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc',
    },
    {
      title: 'Community Service Initiatives',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
    },
    {
      title: 'Cultural Events',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    },
  ];

  const reasons = [
    {
      icon: <FaTrophy size={40} color="#dc3545" />,
      title: 'Award-Winning Excellence',
      description:
        'We’ve received multiple national awards for academic performance, research, and innovation.',
    },
    {
      icon: <FaSmile size={40} color="#f39c12" />,
      title: 'Student Happiness',
      description:
        'Our students love the experience—supportive faculty, vibrant campus life, and personalized mentorship.',
    },
    {
      icon: <FaMapMarkerAlt size={40} color="#0d6efd" />,
      title: 'Multiple Campuses',
      description:
        'With top campuses in Lahore, Karachi, and Islamabad, you can study wherever suits you best.',
    },
    {
      icon: <FaGraduationCap size={40} color="#20c997" />,
      title: 'High Graduation Rate',
      description:
        'Over 90% of our students graduate on time with job-ready skills and strong academic records.',
    },
    {
      icon: <FaChalkboardTeacher size={40} color="#6f42c1" />,
      title: 'Expert Faculty',
      description:
        'Our professors are industry professionals and PhDs with real-world experience.',
    },
    {
      icon: <FaStar size={40} color="#ffc107" />,
      title: 'Top Ranked Programs',
      description:
        'Recognized in top 10 nationwide for Computer Science, Engineering, and Business.',
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Image */}
      <div
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
          padding: '0 2rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About My University</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 0 }}>
          My University was founded in 1990 and is dedicated to excellence in teaching,
          learning, and research. Our mission is to prepare students to make meaningful contributions to society.
        </p>
      </div>

      {/* Activities Grid */}
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>University Activities</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: 0 }}>{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Why Choose Us Section */}
      <div style={{ backgroundColor: '#007bff', color: 'white', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Why Choose University of Arts & Technology?
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                color: '#333',
                borderRadius: '12px',
                padding: '2rem',
                width: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{reason.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{reason.title}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{reason.description}</p>
            </div>
          ))}
         </div>
      </div>
    </div>
  );
};

export default About;


