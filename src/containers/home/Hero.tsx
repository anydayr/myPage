import Experience from '../../assets/experience.svg';
import CircularText from '../../assets/circular-text.svg';

const Hero = () => {
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
        <img src={Experience} alt="" style={{ position: 'absolute' }} />
        <img src={CircularText} alt="" />
      </div>
    </div>
  );
};

export default Hero;
