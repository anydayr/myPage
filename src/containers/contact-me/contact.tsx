import './contact-me.css'
import Linkedin from '../../assets/linkedin-logo.png'
import Git from '../../assets/github-logo.png'
import Gmail from '../../assets/gmail-logo.png'
const Contact = () => {
  return (
    <div>
      {' '}
      <div className="contact-me">
        <p style={{ color: '#00fed0' }}>
          {' '}
          Contáctame a traves de mis redes sociales
        </p>

        <a
          href="https://www.linkedin.com/in/anny-rond%C3%B3n-18b967283/"
          style={{
            background: 'none',
            border: 'solid 1px white',
            padding: '2px',
          }}
        >
          <img src={Linkedin} height={40} />
        </a>
        <a
          href="https://github.com/anydayr"
          style={{
            background: 'none',
            border: 'solid 1px white',
            padding: '2px',
          }}
        >
          <img src={Git} height={40} />
        </a>
        <a
          href="mailto:annyrondon2025@gmail.com"
          style={{
            background: 'none',
            border: 'solid 1px white',
            padding: '2px',
          }}
        >
          <img src={Gmail} height={40} />
        </a>
      </div>
      <div className="footer">Made with ❤️</div>
    </div>
  )
}

export default Contact
