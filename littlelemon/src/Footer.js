function Footer() {
  return (
    <footer className="footer">
      <section className="footer__brand">
        <h3>Little Lemon</h3>
        <p>A family-owned Mediterranean restaurant in Chicago.</p>
      </section>
 
      <section className="footer__nav">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </section>
 
      <section className="footer__contact">
        <h4>Contact</h4>
        <address>
          <p>123 Lemon Street, Chicago, IL 60601</p>
          <p>Phone: <a href="tel:+13125550199">(312) 555-0199</a></p>
          <p>Email: <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a></p>
        </address>
      </section>
 
      <section className="footer__social">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}
 
export default Footer;
 