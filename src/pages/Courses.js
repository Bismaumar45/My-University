import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const courses = [
  {
    title: 'Computer Science',
    image: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://cs.exampleuniversity.edu',
  },
  {
    title: 'Mass Communication',
    image: 'https://plus.unsplash.com/premium_photo-1684979564941-dbf8664a68fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzcyUyMGNvbW11bmljYXRpb258ZW58MHx8MHx8fDA%3D',
    link: 'https://cs.exampleuniversity.edu',
  },
  {
    title: 'Business Administration',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818',
    link: 'https://business.exampleuniversity.edu',
  },
  {
    title: 'Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f',
    link: 'https://mech.exampleuniversity.edu',
  },
  {
    title: 'Psychology',
    image: 'https://images.unsplash.com/photo-1593444286621-98245b7d4530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHN5Y29sb2d5fGVufDB8fDB8fHww',
    link: 'https://psychology.exampleuniversity.edu',
  },
  {
    title: 'Botany',
    image: 'https://plus.unsplash.com/premium_photo-1683134371956-256b6eae334e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvdGFueXxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://botany.exampleuniversity.edu',
  },
  {
    title: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    link: 'https://se.exampleuniversity.edu',
  },
  {
    title: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39',
    link: 'https://ai.exampleuniversity.edu',
  }
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Bootstrap Carousel */}
      <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
              className="d-block w-100"
              alt="Campus Slide"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontWeight: 'bold', textShadow: '1px 1px 3px black' }}>Welcome to Our Courses</h2>
              <p style={{ fontSize: '1.1rem', textShadow: '1px 1px 3px black' }}>
                Explore a wide range of academic programs designed to equip you with knowledge and practical skills for a successful future.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
              className="d-block w-100"
              alt="Library Slide"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Course Cards */}
      <div className="grid-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <a href={course.link} target="_blank" rel="noopener noreferrer" className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Study with Us Section */}
      <div style={{ display: 'flex', padding: '3rem', backgroundColor: '#fff' }}>
        <div style={{ flex: 1, paddingRight: '2rem' }}>
          <h2>Study with us</h2>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, sunt saepe fugit dolores error
            mollitia doloribus optio, recusandae aperiam, nihil eius rem eum atque sequi...
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas ipsa assumenda eos veritatis nemo fuga
            dolore saepe eius, laborum magni id quae quidem tempore consequuntur eveniet voluptatibus, suscipit atque,
            voluptatem blanditiis deleniti perferendis dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas ipsa assumenda eos veritatis nemo fuga
            dolore saepe eius, laborum magni id quae quidem tempore consequuntur eveniet voluptatibus, suscipit atque,
            voluptatem blanditiis deleniti perferendis dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas ipsa assumenda eos veritatis nemo fuga
            dolore saepe eius, laborum magni id quae quidem tempore consequuntur eveniet voluptatibus, suscipit atque,
            voluptatem blanditiis deleniti perferendis dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas ipsa assumenda eos veritatis nemo fuga
            dolore saepe eius, laborum magni id quae quidem tempore consequuntur eveniet voluptatibus, suscipit atque,
            voluptatem blanditiis deleniti perferendis dolores.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '0.6rem 1.4rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '1rem'
      }}
    >
      Contact Us
    </button>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Graduate"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;

