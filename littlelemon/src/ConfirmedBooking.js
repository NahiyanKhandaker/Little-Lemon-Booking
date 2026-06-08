import { useEffect, useRef } from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <main id="main" className="confirmed-booking">
      <section className="confirmation-container">
        <h1 tabIndex={-1} ref={headingRef}>Booking Confirmed!</h1>
        <p>Your reservation has been successfully confirmed.</p>
        <p>We look forward to seeing you at Little Lemon!</p>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
