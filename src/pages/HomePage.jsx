import React from 'react';

import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 1023 });
  return isMobile ? children : null;
};

const HomePage = () => {
  return (
    <>
      <Desktop>
        <img
          src={require('../../src/components/images/igrushka_telefonnaia_budka_kniga_67700_1280x720.jpg')}
          alt="phone-book"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        />
      </Desktop>
      <Tablet>
        <img
          src={require('../../src/components/images/igrushka_telefonnaia_budka_kniga_67700_1024x768.jpg')}
          alt="phone-book"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        />
      </Tablet>
      <Mobile>
        <img
          src={require('../../src/components/images/igrushka_telefonnaia_budka_kniga_67700_320x480.jpg')}
          alt="phone-book"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        />
      </Mobile>
    </>
  );
};

export default HomePage;
