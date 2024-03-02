import './home.css'

import Component from '../../assets/Component 1 .svg'

const Home = () => {
  return (
    <div>
      <div
        className="home"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="home_container">
          <h2 className="fullName">Anny Rondón</h2>
          <img src={Component} alt="" className="part-casette" />
          <h3 className="rol">Front-end dev</h3>
          <span className="sticker">Portafolio</span>
        </div>
      </div>
    </div>
  )
}

export default Home
