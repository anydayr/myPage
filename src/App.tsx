import Contact from './containers/contact-me/contact'
import Explore from './containers/explore/explore'
import Home from './containers/home/home'
import Jobs from './containers/jobs/Jobs'

function App() {
  return (
    <div>
      <Home />
      <Explore />
      {/*   <Stack /> */}
      <Jobs />
      <Contact />
    </div>
  )
}

export default App
