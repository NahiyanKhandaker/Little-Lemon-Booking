import logo from './assets/logo.png';
 
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon logo" className="header__logo" />
    </header>
  );
}
 
export default Header;