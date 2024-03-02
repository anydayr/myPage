import './jobs.css'

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs_layout">
        <div className="proyect_1" style={{ position: 'relative' }}>
          <div className="overlay">
            <h3 className="overlay_title">El secreto de tu cocina</h3>
            <a className="ver-mas">Ver más</a>
          </div>
        </div>
        <div className="proyect_2" style={{ position: 'relative' }}>
          <div className="overlay">
            <h3 className="overlay_title">Soy personalidad</h3>
            <a href="https://soypersonalidad.com" className="ver-mas">
              Ver más
            </a>
          </div>
        </div>
        <div className="proyect_3" style={{ position: 'relative' }}>
          <div className="overlay">
            <h3 className="overlay_title">Club terrazas</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.club.terrazas.app&hl=es_CO&gl=US"
              className="ver-mas"
            >
              Ver más
            </a>
          </div>
        </div>
        <div
          className="proyect_4"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h3 className="the_next">Te animas a ser el siguiente?</h3>
          <div className="overlay">
            <a className="ver-mas">Contáctame</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
