import Experience from '../../assets/experience.svg';
import CircularText from '../../assets/curve text.svg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [classname, setClassname] = useState('');

  const manejarScroll = () => {
    if (window.scrollY > 300) {
      setClassname('experience');
    } else {
      setClassname('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', manejarScroll);
    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, [window.scrollY > 400]);

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
      <img
        src={Experience}
        alt=""
        style={{ position: 'absolute', zIndex: 1 }}
        className={classname}
      />
      <img
        src={CircularText}
        alt=""
        style={{ position: 'absolute', zIndex: 1, top: '65%' }}
        className={classname}
      />
    </div>
  );
};

export default Hero;
