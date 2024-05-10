import './home.css';
import circle1 from '../../assets/circle-1.svg';
import circle2 from '../../assets/circle-2.svg';
import circle3 from '../../assets/circle-3.svg';
import line from '../../assets/line.svg';
const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-end',

        background: '#050B0E'
      }}>
      <div
        style={{
          right: '40%',
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <img src={line} alt="" style={{ position: 'absolute', bottom: '90%', zIndex: 10 }} />
        <div className="circle_1">
          <img
            src={circle1}
            alt=""
            style={{ position: 'absolute', height: '100%', width: '100%' }}
          />
        </div>
        <div className="circle_2">
          <img
            src={circle2}
            alt=""
            style={{ position: 'absolute', height: '100%', width: '100%' }}
          />
        </div>
        <div className="circle_3">
          <img
            src={circle3}
            alt=""
            style={{ position: 'absolute', height: '100%', width: '100%' }}
          />
        </div>
        {/*   <img src={circle2} alt="" style={{ position: 'absolute' }} />
        <img src={circle1} alt="" style={{ position: 'absolute' }} /> */}
      </div>

      <div
        style={{ display: 'flex', flexDirection: 'column', marginRight: '7%', marginTop: '10%' }}>
        <h1
          style={{
            fontSize: '85px',
            color: '#7DBCCF',
            fontWeight: '100',
            margin: 0
          }}>
          Anny Rondón
        </h1>
        <h2 style={{ fontSize: '55px', color: '#FFFFFF', fontWeight: '100', margin: 0 }}>
          Desarrollador front-end
        </h2>
      </div>
    </div>
  );
};

export default Home;
