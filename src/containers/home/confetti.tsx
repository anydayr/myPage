import Balloons from '../../assets/balloons.svg';
const Confetti = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: '#050B0E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '32px'
      }}>
      <p style={{ margin: 0, color: 'white', fontSize: '35px', fontWeight: 100 }}>
        Ya son más de <span style={{ color: '#F92E5E' }}>4 años creando soluciones</span>
        soluciones
      </p>
      <p>Nuevo</p>
      <p>Main</p>
      <p>Nuevo</p>

      <p>Develop</p>
      <p>9</p>
      <p>9</p>
      <p>Nuevo</p>
      <p>Main</p>
      <p>Develop</p>
      <p>9</p>
      <p>9</p>
      <p>98</p>
      <p>9000</p>
      {/* 
      <h2 style={{ fontSize: '200px', color: '#7DBCCF', fontWeight: 100, margin: 0 }}>Celebrar</h2> */}
      {/*    <img src={Balloons} alt="" style={{ position: 'absolute', left: '75%' }} /> */}
      <button
        style={{
          borderRadius: '42px',
          background: '#F92E5E',
          padding: '0.5rem',
          fontSize: '24px',
          color: 'white'
        }}>
        Haz click
      </button>
    </div>
  );
};

export default Confetti;
