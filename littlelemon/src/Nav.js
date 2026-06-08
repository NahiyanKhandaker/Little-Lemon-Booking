import { Link } from 'react-router-dom';
import logo from './icons_assets/logo.svg';

function Nav() {
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/" className="nav_link" aria-label="Go to home page">
            <img src={logo} alt="Little Lemon logo" />
          </Link>
        </li>
        <li><a href="#specials" className="nav__link" aria-label="Specials" onClick={(e) => handleSmoothScroll(e, 'specials')}>Specials</a></li>
        <li><a href="#about" className="nav__link" aria-label="About" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a></li>
        <li><a href="#testimonials" className="nav__link" aria-label="Reviews" onClick={(e) => handleSmoothScroll(e, 'testimonials')}>Reviews</a></li>
        <li><Link to="/booking" className="nav__link" aria-label="Reservations">Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;