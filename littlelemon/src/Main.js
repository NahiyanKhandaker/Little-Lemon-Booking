import './index.css';

import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
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
  return initialTimes;
}

function updateTimes(state, action) {
  if (action.type === 'update') {
    if (!action.date) {
      return initializeTimes();
    }

    return initializeTimes().filter(
      (slot) => !action.bookings?.some((booking) => booking.date === action.date && booking.time === slot)
    );
  }
  return state;
}

function Main() {
  const [selectedDate, setSelectedDate] = useState("");
  const [bookings, setBookings] = useState([]);
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

  useEffect(() => {
    dispatchTimes({ type: 'update', date: selectedDate, bookings });
  }, [bookings]);

  const handleBookingSubmit = (reservation) => {
    setBookings((prev) => [...prev, reservation]);
  };

  return (
    <>
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
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
 