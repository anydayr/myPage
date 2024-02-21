import './jobs.css'
import { useState } from 'react'
import Folder from '../../assets/folder-icon.png'
import { MoveLeft, MoveRight } from 'lucide-react'
import Club from '../../assets/club-terrazas-job.webp'

const Jobs = () => {
  const [folderSelected, setFolderSelected] = useState('')
  return (
    <div className="jobs">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}></div>
      <div className="jobs_container">
        <div>
          <h2 className="jobs_title">Proyectos</h2>
          <p
            style={{
              textTransform: 'uppercase',
              color: '#be3455',
              fontSize: '50px',
              margin: 0,
            }}
          >
            {folderSelected}
          </p>
          {folderSelected ? (
            <button
              className="back"
              onClick={() => {
                setFolderSelected('')
              }}
            >
              <MoveLeft />
              Regresar
            </button>
          ) : (
            <p
              style={{
                color: '#be3455',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Seleccione una carpeta para continuar <MoveRight />
            </p>
          )}
        </div>
        {folderSelected === 'front-end' && (
          <div style={{ padding: '2rem' }}>
            <div className="tooltip">
              <a href="https://play.google.com/store/apps/details?id=com.club.terrazas.app&hl=es_CO&gl=US&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Dclub+terrazas+play+store&pcampaignid=APPU_1_LJjTZc3dIc7I1sQPmcK8wAY">
                <img src={Club} alt="" height={500} />
              </a>
              <span className="tooltiptext">
                <b>Club terrazas</b>
                <br />
                App mobile para la gestión de actividades relacionadas a un club
                de tennis.
              </span>
            </div>
          </div>
        )}

        {!folderSelected && (
          <div
            className=""
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <button
              style={{ background: 'none', border: 'none' }}
              onClick={() => {
                setFolderSelected('front-end')
              }}
            >
              <img src={Folder} height={150} />
              <p style={{ color: '#be3455' }}>
                <b>Front-end</b>
              </p>
            </button>
            <button
              style={{ background: 'none', border: 'none' }}
              onClick={() => {
                setFolderSelected('full-stack')
              }}
            >
              <img src={Folder} height={150} />
              <p style={{ color: '#be3455' }}>
                <b>Full-stack</b>
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Jobs
