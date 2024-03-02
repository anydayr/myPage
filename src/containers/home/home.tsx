import './home.css'

import Component from '../../assets/Component 1 .svg'
import Circular from '../../assets/circular.svg'
const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <img src={Circular} alt="" height={40} />
        <img src={Circular} alt="" height={40} />
      </div>

      <div
        className="home_layout"
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

      <div className="details">
        <img src={Circular} alt="" height={40} />
        <img src={Circular} alt="" height={40} />
      </div>
    </div>
  )
}

export default Home
