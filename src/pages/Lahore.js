import React from 'react';

const achievements = [
  {
    image: 'https://images.unsplash.com/photo-1704969723938-0c310608d6c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmF0aW9uYWwlMjBJbm5vdmF0aW9ufGVufDB8fDB8fHww',
    title: 'National Innovation Award',
    description: 'Faculty recognized for excellence in teaching and research.',
  },
  {
    image: 'https://images.unsplash.com/photo-1737228813532-9cd720824ba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJvYm90aWNzJTIwQ2hhbXBpb25zaGlwfGVufDB8fDB8fHww',
    title: 'Robotics Championship 2024',
    description: 'Our students won 1st place at the National Hackathon 2024.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1712275287670-b05075484b94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFja2F0aG9uJTIwd2lubmVyfGVufDB8fDB8fHww',
    title: 'Hackathon Winner',
    description: 'Our students won 1st place at the National Hackathon 2024.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1681248156502-745ab87474d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjdWx0eXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Best Faculty Award',
    description: 'Faculty recognized for excellence in teaching and research.',
  },
  {
    image: 'https://images.unsplash.com/photo-1659277319138-bc5ea0b3377f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVzdCUyMERlYmF0aW5nJTIwU29jaWV0eSUyMEF3YXJkfGVufDB8fDB8fHww',
    title: 'Best Debating Society Award',
    description: 'Faculty recognized for excellence in teaching and research.',
  },
  {
    image: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2NpZW5jZSUyMEZhaXJ8ZW58MHx8MHx8fDA%3D',
    title: 'Science Fair Champion',
    description: 'Innovative projects showcased in the Lahore Science Fair.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1681140560805-de6115554023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlZW4lMjBDYW1wdXMlMjBJbml0aWF0aXZlJTIwUmVjb2duaXRpb258ZW58MHx8MHx8fDA%3D',
    title: 'Green Campus Initiative Recognition',
    description: 'Faculty recognized for excellence in teaching and research.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1713102865983-251005c8bd5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmF0aW9uYWwlMjBTcG9ydHMlMjBNZWV0JTIwJUUyJTgwJTkzJTIwR29sZCUyME1lZGFsfGVufDB8fDB8fHww',
    title: 'National Sports Meet - Gold Medal',
    description: 'Innovative projects showcased in the Lahore Science Fair.',
  },
];

const Lahore = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <img
          src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcHVzfGVufDB8fDB8fHww"
          alt="Lahore Campus"
          style={{ width: '100%', height: '80vh' }}
        />
      </div>

      {/* Achievements */}
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Achievements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {achievements.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem', maxWidth: '600px' }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lahore;
