import './jobs.css'
import Club from '../../assets/club-terrazas-job.webp'
import SoyPersonalidad from '../../assets/soy-personalidad.svg'
const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs_grid">
        <div className="proyect_1">
          <img src={Club} height={'100%'} style={{ backgroundSize: 'cover' }} />
        </div>
        <div className="proyect_2"></div>
        <div className="proyect_3">
          {' '}
          <img
            src={SoyPersonalidad}
            height={'100%'}
            style={{ backgroundSize: 'cover' }}
          />
        </div>
        <div className="proyect_4">4</div>
      </div>
    </div>
  )
}

export default Jobs
