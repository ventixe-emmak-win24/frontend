import { Link } from 'react-router-dom'
import LogoTitle  from "../images/LogoTitle.svg"
import Logo from "../images/Logo.svg"

const Nav = () => {
  return (
    <nav className="desktop-nav">
      <img src={LogoTitle} alt="Logo" className="nav-logo-full" />
      <img src={Logo} alt="Logo" className="nav-logo-small" />
      <Link to="/" className="nav-link link-active" >
        <span className=""><i className="fa-sharp fa-solid fa-ticket"></i></span>
        <span className="link-text">Events</span>
      </Link>
    </nav>
    
  )
}

export default Nav