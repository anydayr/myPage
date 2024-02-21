import './explore.css'
import iconMac from '../../assets/logo.png'
import MacintoshExplorer from '../../components/macintoshExplorer'
const Explore = () => {
  return (
    <div className="explore">
      <div className="explore" style={{ display: 'flex' }}>
        <MacintoshExplorer />
        <div>
          <h2 className="explore_title">
            <span style={{ color: '#be3455' }}>Hello</span> world
          </h2>
          <p className="explore_description">
            Exploremos esta macintosh de 1984
            <img src={iconMac} alt="" style={{ marginLeft: '8px' }} />
          </p>
          <p className="explore_credits">
            Manten presionado el cursor sobre el objeto y gira lentamente
          </p>
        </div>
      </div>
    </div>
  )
}

export default Explore
