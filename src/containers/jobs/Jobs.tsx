import './jobs.css'
import Club from '../../assets/club-terrazas.jpg'
import Personality from '../../assets/soy-personalidad1.jpg'
import Cook from '../../assets/cooking.jpg'
import Fisioterapist from '../../assets/fisioterapist.jpg'
const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs_layout">
        <div className="proyect_1" style={{ position: 'relative' }}>
          <img
            src={Club}
            alt=""
            height={'100%'}
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />

          <div className="overlay">
            <div
              style={{
                textAlign: 'center',
                color: 'black',
                padding: '1em',
              }}
            >
              <h3 style={{ margin: 0 }}>Club terrazas</h3>
              <p>
                Una app mobile construida pensada en la automatización y gestion
                de los procesos del club Colaboré felizmente en el desarrollo de
                los componentes de la interfaz de usuario
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.club.terrazas.app&hl=es_CO&gl=US"
                className="ver-mas"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
        <div className="proyect_2" style={{ position: 'relative' }}>
          <img
            src={Personality}
            alt=""
            height={'100%'}
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />
          <div
            className="overlay"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              color: 'black',
              padding: '1em',
            }}
          >
            <h3 style={{ margin: 0 }}>Soy personalidad</h3>
            <p>
              Una aplicación web para determinar tu tipo de personalidad en base
              a 9 eneatipos. Participe en la etapa de diseño y desarrllo de los
              componentes de la plataforma
            </p>
            <a href="https://soypersonalidad.com" className="ver-mas">
              Ver más
            </a>
          </div>
        </div>
        <div className="proyect_3" style={{ position: 'relative' }}>
          <img
            src={Cook}
            alt=""
            height={'100%'}
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />

          <div
            className="overlay"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              width: '100%',
              color: 'black',
            }}
          >
            <h3 style={{ margin: 0 }}>El secreto de tu cocina</h3>
            <p>
              Es una landing page realizada con fines prácticos para aplicar
              nuevas animaciones de css y tambien agregar formularios reactivos.
            </p>
            <a
              href="https://food-landing-gamma.vercel.app/"
              className="ver-mas"
            >
              Ver más
            </a>
          </div>
        </div>
        <div className="proyect_4" style={{ position: 'relative' }}>
          <img
            src={Fisioterapist}
            alt=""
            height={'100%'}
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />
          <div
            className="overlay"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              width: '100%',
              color: 'black',
            }}
          >
            <h3 style={{ margin: 0 }}>Centro de Fisioterapia Roma</h3>
            <p>
              Sistema web para gestionar citas medicas en un centro de
              fisioterapia. Estuve a cargo del desarrollo responsive de la
              interfaz y tambien de la integracióncon todos los servicios
              necesarios de la API REST
            </p>
            <button className="ver-mas" disabled>
              Repositorio privado
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
