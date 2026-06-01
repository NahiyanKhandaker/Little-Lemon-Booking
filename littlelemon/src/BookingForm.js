import React from "react";
import "./BookingForm.css";

function BookingForm({
  date,
  time,
  guests,
  occasion,
  availableTimes = [],
  bookings = [],
  onDateChange,
  dispatchTimes,
  onTimeChange,
  onGuestsChange,
  onOccasionChange,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { date, time, guests, occasion };
    if (onSubmit) onSubmit(reservation);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="res-date">Date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            const val = e.target.value;
            if (dispatchTimes) dispatchTimes({ type: 'update', date: val, bookings });
            if (onDateChange) onDateChange(val);
          }}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => onTimeChange && onTimeChange(e.target.value)}
          required
        >
          <option value="" disabled>
            Choose time
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => onGuestsChange && onGuestsChange(parseInt(e.target.value || "0", 10))}
          min="1"
          max="10"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => onOccasionChange && onOccasionChange(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div className="form-row">
        <button type="submit">Submit reservation</button>
      </div>
    </form>
  );
}

export default BookingForm;
