import React from 'react';

const HomePage = () => {
  return (
    <img
      src={require('../images/Telefonbog_ubt-1.jpg')}
      alt="phone-book"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default HomePage;
