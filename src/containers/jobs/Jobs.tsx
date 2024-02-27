import './jobs.css'
import Club from '../../assets/club-terrazas-job.webp'
import SoyPersonalidad from '../../assets/soy-personalidad.svg'
const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs_layout">
        <div className="proyect_1" style={{ position: 'relative' }}>
          <img src={Club} height={'100%'} />
          <div className="overlay">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',

                color: 'white',
              }}
            >
              <h3>Club terrazas</h3>
              <p>
                Una app mobile construida pensada en la automatización y gestion
                de los procesos del club Colaboré felizmente en el desarrollo de
                los componentes de la interfaz de usuario
              </p>
              <button className="ver-mas">Ver más</button>
            </div>
          </div>
        </div>
        <div className="proyect_3" style={{ position: 'relative' }}>
          <img src={SoyPersonalidad} height={'100%'} />
          <div
            className="overlay"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',

              color: 'white',
            }}
          >
            <h3>Soy personalidad</h3>
            <p>
              Una aplicación web para determinar tu tipo de personalidad en base
              a 9 eneatipos. Tuve la oportunidad de colaborar en la etapa de
              diseño responsive y desarrllo de los componentes de la plataforma
            </p>
            <button className="ver-mas">Ver más</button>
          </div>
        </div>

        <div className="proyect_4">4</div>
      </div>
    </div>
  )
}

export default Jobs
