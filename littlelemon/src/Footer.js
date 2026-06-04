import logo from './icons_assets/restaurantfood.jpg';

function Footer() {
  return (
    <footer className="footer">
 
      <section className="footer__nav footer__brand">
        <img src={logo} alt="Little Lemon logo" className="footer__brand-logo" />
          <div className="footer__brand-copy">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/" aria-label="On Click">Home</a></li>
            <li><a href="/about" aria-label="On Click">About</a></li>
            <li><a href="/menu" aria-label="On Click">Menu</a></li>
            <li><a href="/reservations" aria-label="On Click">Reservations</a></li>
            <li><a href="/order" aria-label="On Click">Order Online</a></li>
            <li><a href="/login" aria-label="On Click">Login</a></li>
          </ul>
        </div>
      </section>
 
      <section className="footer__contact">
        <h4>Contact</h4>
        <address>
          <p>123 Lemon Street, Chicago, IL 60601</p>
          <p>Phone: <a href="tel:+13125550199" aria-label="On Click">(312) 555-0199</a></p>
          <p>Email: <a href="mailto:hello@littlelemon.com" aria-label="On Click">hello@littlelemon.com</a></p>
        </address>
      </section>
 
      <section className="footer__social">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="On Click">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="On Click">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="On Click">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}
 
export default Footer;
 