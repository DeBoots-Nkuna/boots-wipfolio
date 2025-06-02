import { NavLink } from 'react-router-dom'
import btLogo from '../assets/boots-logo-bk.png'

export const NavBar = () => {
  return (
    <header className="navbar-container">
      <img className="boots-logo" src={btLogo} alt="Nkuna Logo in Black" />
      <ul>
        <NavLink className="nav-link" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="nav-link" to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className="nav-link" to="projects">
          <li>Projects</li>
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </header>
  )
}
