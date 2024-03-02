import './contact-me.css'
import Linkedin from '../../assets/linkedin-logo.png'
import Git from '../../assets/github-logo.png'
import Gmail from '../../assets/gmail-logo.png'
const Contact = () => {
  return (
    <div className="contact-me">
      <a
        className="social"
        href="https://www.linkedin.com/in/anny-rond%C3%B3n-18b967283/"
      >
        <img src={Linkedin} height={40} />
      </a>
      <a className="social" href="https://github.com/anydayr">
        <img src={Git} height={40} />
      </a>
      <a className="social" href="mailto:annyrondon2025@gmail.com">
        <img src={Gmail} height={40} />
      </a>
    </div>
  )
}

export default Contact
