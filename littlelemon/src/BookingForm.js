import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes] = useState([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { date, time, guests, occasion };
    console.log("Reservation submitted:", reservation);
    alert("Reservation submitted! Check console for details.");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="res-date">Date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
          onChange={(e) => setGuests(parseInt(e.target.value || "0", 10))}
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
          onChange={(e) => setOccasion(e.target.value)}
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
