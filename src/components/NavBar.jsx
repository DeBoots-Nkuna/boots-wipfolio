import btLogo from '../assets/boots-logo-bk.png'

export const NavBar = () => {
  return (
    <header className="navbar-container">
      <img className="boots-logo" src={btLogo} alt="Nkuna Logo in Black" />
      <nav>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </nav>
      <button>Get Started</button>
    </header>
  )
}
