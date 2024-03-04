import './jobs.css'
import Title from '../../assets/title.svg'
const Jobs = () => {
  return (
    <div className="jobs">
      <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        <img className="title_jobs" src={Title} alt="" />
        <div className="jobs_layout">
          <div className="proyect_1" style={{ position: 'relative' }}>
            <div className="overlay">
              <h3 className="overlay_title">Proyecto 1</h3>
              <a className="ver-mas">Ver más</a>
            </div>
          </div>
          <div className="proyect_2" style={{ position: 'relative' }}>
            <div className="overlay">
              <h3 className="overlay_title">Proyecto 2</h3>
              <a className="ver-mas">Ver más</a>
            </div>
          </div>
          <div className="proyect_3" style={{ position: 'relative' }}>
            <div className="overlay">
              <h3 className="overlay_title">Proyecto 3</h3>
              <a className="ver-mas">Ver más</a>
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
              <a
                className="ver-mas"
                href="https://www.linkedin.com/in/anny-rond%C3%B3n-18b967283/"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
