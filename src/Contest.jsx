// src/Pages/Contest.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contests = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://last-airbender-api.fly.dev/api/v1/characters/avatar")
      .then((res) => {
        setAvatars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Avatar characters:", err);
        setLoading(false);
      });
  }, []);

  //adding some cool styling
  return (
    <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', color: '#2e8b57', fontSize: '2.5rem', marginBottom: '20px' }}>
        Avatar Characters
      </h1>

      {loading ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555' }}>
          Loading Avatar characters...
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {avatars.map((avatar) => ( //adding cool stuff to the grids
            <div
              key={avatar._id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}
            >
              <h2 style={{ color: '#2e8b57', fontSize: '1.25rem' }}>{avatar.name}</h2>
              <p style={{ color: '#444', fontSize: '1rem' }}>
                <strong>Affiliation:</strong> {avatar.affiliation || 'Not available'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contests;
