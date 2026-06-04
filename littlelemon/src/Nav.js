import { Link } from 'react-router-dom';
import logo from './icons_assets/logo.svg';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/" className="nav_link" aria-label="On Click">
            <img src={logo} alt="Little Lemon logo" />
          </Link>
        </li>
        <li><Link to="/" className="nav__link" aria-label="On Click">Home</Link></li>
        <li><Link to="/about" className="nav__link" aria-label="On Click">About</Link></li>
        <li><Link to="/menu" className="nav__link" aria-label="On Click">Menu</Link></li>
        <li><Link to="/booking" className="nav__link" aria-label="On Click">Reservations</Link></li>
        <li><Link to="/login" className="nav__link" aria-label="On Click">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;