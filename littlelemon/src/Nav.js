import logo from './icons_assets/logo.svg';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <img src={logo} alt="Little Lemon logo" className="nav_link" />
        <li><a href="/" className="nav__link">Home</a></li>
        <li><a href="/about" className="nav__link">About</a></li>
        <li><a href="/menu" className="nav__link">Menu</a></li>
        <li><a href="/reservations" className="nav__link">Reservations</a></li>
        <li><a href="/order" className="nav__link">Order Online</a></li>
        <li><a href="/login" className="nav__link">Login</a></li>
      </ul>
    </nav>
  );
}
 
export default Nav;