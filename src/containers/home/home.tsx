import './home.css'
import './home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div style={{ position: 'relative' }}>
          <h1 className="home_title">Anny Rondón</h1>
          <p className="home_rol">Desarrollador de software</p>
          <div style={{ display: 'flex', gap: '8px', color: '#00fed0' }}>
            <div className="active"></div>Disponible para trabajar
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
