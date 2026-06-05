import './index.css';

import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { useEffect, useReducer, useState } from 'react';

const initialTimes = [
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];

function initializeTimes() {
  const today = new Date();
  try {
    if (typeof window.fetchAPI !== 'undefined') {
      return window.fetchAPI(today) || initialTimes;
    }
    console.warn('fetchAPI not loaded');
    return initialTimes;
  } catch (error) {
    console.error('Error in initializeTimes:', error);
    return initialTimes;
  }
}

function updateTimes(state, action) {
  if (action.type === 'update') {
    if (!action.date) {
      return initializeTimes();
    }

    const dateObj = new Date(action.date);
    try {
      if (typeof window.fetchAPI !== 'undefined') {
        return window.fetchAPI(dateObj) || initialTimes;
      }
      return initialTimes;
    } catch (error) {
      console.error('Error in updateTimes:', error);
      return initialTimes;
    }
  }
  return state;
}

function Main() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [bookings, setBookings] = useState([]);
  const [notification, setNotification] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitDelayMessage, setSubmitDelayMessage] = useState('');
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

  useEffect(() => {
    dispatchTimes({ type: 'update', date: selectedDate, bookings });
  }, [bookings, selectedDate]);

  const handleBookingSubmit = async (reservation) => {
    if (typeof window.submitAPI === 'undefined') {
      console.error('submitAPI not loaded');
      setNotification('API not ready. Please refresh and try again.');
      alert('API not ready. Please refresh and try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitDelayMessage('');
    const delayTimer = setTimeout(() => {
      setSubmitDelayMessage('Saving your reservation — this may take a moment.');
    }, 400);

    try {
      const success = await Promise.resolve().then(() => window.submitAPI(reservation));
      if (success) {
        setBookings((prev) => [...prev, reservation]);
        setNotification('Your reservation was confirmed.');
        navigate('/confirmed');
        setTimeout(() => setNotification(''), 5000);
      } else {
        setNotification('Booking failed. Please try again.');
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setNotification('Error submitting booking.');
      alert('Error submitting booking: ' + error.message);
    } finally {
      clearTimeout(delayTimer);
      setSubmitDelayMessage('');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {notification}
      </div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              bookings={bookings}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              dispatchTimes={dispatchTimes}
              onBookingSubmit={handleBookingSubmit}
              isSubmitting={isSubmitting}
              submitDelayMessage={submitDelayMessage}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
export { initializeTimes, updateTimes };
 