import './jobs.css'

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs_layout">
        <div className="proyect_1" style={{ position: 'relative' }}>
          <div className="overlay">
            <a className="ver-mas">Ver más</a>
          </div>
        </div>
        <div className="proyect_2" style={{ position: 'relative' }}>
          <div className="overlay">
            <a href="https://soypersonalidad.com" className="ver-mas">
              Ver más
            </a>
          </div>
        </div>
        <div className="proyect_3" style={{ position: 'relative' }}>
          <div className="overlay">
            <a
              href="https://play.google.com/store/apps/details?id=com.club.terrazas.app&hl=es_CO&gl=US"
              className="ver-mas"
            >
              Ver más
            </a>
          </div>
        </div>
        <div className="proyect_4" style={{ position: 'relative' }}>
          <div className="overlay">
            <a
              href="https://play.google.com/store/apps/details?id=com.club.terrazas.app&hl=es_CO&gl=US"
              className="ver-mas"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
