import './index.css';

import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

function initializeTimes() {
  return [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];
}

function updateTimes(state, action) {
  if (action.type === 'update') {
    return initializeTimes();
  }
  return state;
}

function Main() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

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
              dispatchTimes={dispatchTimes}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
 