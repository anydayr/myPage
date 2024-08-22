import Experience from '../../assets/experience.svg';
import CircularText from '../../assets/circular-text.svg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [classname, setClassname] = useState('#3A0267');

  const manejarScroll = () => {
    if (window.scrollY < 500) {
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
  }, []);

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
      <div>
        <img src={Experience} alt="" style={{ position: 'absolute' }} className={classname} />
        <img src={CircularText} alt="" />
      </div>
    </div>
  );
};

export default Hero;
