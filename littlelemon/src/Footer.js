import logo from './icons_assets/restaurantfood.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
 
      <section className="footer__nav footer__brand">
        <img src={logo} alt="Little Lemon logo" className="footer__brand-logo" />
          <div className="footer__brand-copy">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </section>
 
      <section className="footer__contact">
        <h4>Contact</h4>
        <address>
          <p>123 Lemon Street, Chicago, IL 60601</p>
          <p>Phone: <a href="tel:+13125550199" aria-label="Call Little Lemon restaurant">(312) 555-0199</a></p>
          <p>Email: <a href="mailto:hello@littlelemon.com" aria-label="Email Little Lemon restaurant">hello@littlelemon.com</a></p>
        </address>
      </section>
 
      <section className="footer__social">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Facebook">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Instagram">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Twitter">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}
 
export default Footer;
 