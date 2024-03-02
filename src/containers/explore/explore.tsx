import './explore.css'
import iconMac from '../../assets/apple-logo.png'
import MacintoshExplorer from '../../components/macintoshExplorer'
import { Canvas } from '@react-three/fiber'

const Explore = () => {
  return (
    <div className="explore">
      <div className="explore" style={{ display: 'flex' }}>
        <div className="explore_canvas">
          <Canvas style={{ background: '#D9D9D9' }}>
            <MacintoshExplorer />
          </Canvas>
        </div>

        <div style={{ padding: '2em' }}>
          <h2 className="explore_title">
            <span className="explore_hello">Hello</span> world
          </h2>
          <p className="explore_description">
            Exploremos esta macintosh de 1984
            <img src={iconMac} alt="" style={{ marginLeft: '8px' }} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Explore
