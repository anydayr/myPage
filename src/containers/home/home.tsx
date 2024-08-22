import './home.css';
import Name from '../../assets/Anny Rondón.svg';
import Welcome from '../../assets/WELCOME.svg';
import { useEffect, useState } from 'react';

const Home = () => {
  return (
    <div
      style={{
        background: '#3A0267',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
      <img src={Name} alt="" style={{ position: 'absolute', zIndex: 5, top: '40%' }} />
      <p
        style={{
          position: 'absolute',
          zIndex: 5,
          fontSize: '40px',
          color: '#00F0FF',
          textTransform: 'uppercase',
          fontWeight: 600,
          bottom: '25%',
          right: '11%'
        }}>
        FRONT-END DEVELOPER
      </p>

      <img
        src={Welcome}
        className="imagen"
        alt=""
        style={{ position: 'absolute', zIndex: 4 }}
        height={170}
      />
    </div>
  );
};

export default Home;
