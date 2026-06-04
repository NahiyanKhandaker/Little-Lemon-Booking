import React, { useMemo, useState } from "react";
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
  const [touched, setTouched] = useState({ date: false, time: false, guests: false });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const today = useMemo(() => {
    const current = new Date();
    current.setHours(0, 0, 0, 0);
    return current;
  }, []);

  const minDate = today.toISOString().split("T")[0];

  const dateError = useMemo(() => {
    if (!date) return "Please choose a reservation date.";
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) return "Date cannot be in the past.";
    return "";
  }, [date, today]);

  const timeError = useMemo(() => {
    if (!time) return "Please choose a reservation time.";
    if (!availableTimes.includes(time)) return "Please choose an available time.";
    return "";
  }, [time, availableTimes]);

  const guestsError = useMemo(() => {
    if (!guests || guests < 1 || guests > 10) return "Guests must be between 1 and 10.";
    return "";
  }, [guests]);

  const formIsValid = !dateError && !timeError && !guestsError;
  const showDateError = (touched.date || submitAttempted) && dateError;
  const showTimeError = (touched.time || submitAttempted) && timeError;
  const showGuestsError = (touched.guests || submitAttempted) && guestsError;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setTouched({ date: true, time: true, guests: true });
    if (!formIsValid) {
      return;
    }
    const reservation = { date, time, guests, occasion };
    if (onSubmit) onSubmit(reservation);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="res-date">Date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={minDate}
          onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
          onChange={(e) => {
            const val = e.target.value;
            setTouched((prev) => ({ ...prev, date: true }));
            if (dispatchTimes) dispatchTimes({ type: "update", date: val, bookings });
            if (onDateChange) onDateChange(val);
          }}
          required
          aria-invalid={!!dateError}
          aria-describedby={showDateError ? 'res-date-error' : undefined}
        />
        {showDateError && (
          <p id="res-date-error" className="field-error" role="alert">
            {dateError}
          </p>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          value={time}
          onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
          onChange={(e) => {
            const val = e.target.value;
            setTouched((prev) => ({ ...prev, time: true }));
            onTimeChange && onTimeChange(val);
          }}
          required
          aria-invalid={!!timeError}
          aria-describedby={showTimeError ? 'res-time-error' : undefined}
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
        {showTimeError && (
          <p id="res-time-error" className="field-error" role="alert">
            {timeError}
          </p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
          onChange={(e) => {
            setTouched((prev) => ({ ...prev, guests: true }));
            onGuestsChange && onGuestsChange(parseInt(e.target.value || "0", 10));
          }}
          min="1"
          max="10"
          required
          aria-invalid={!!guestsError}
          aria-describedby={showGuestsError ? 'guests-error' : undefined}
        />
        {showGuestsError && (
          <p id="guests-error" className="field-error" role="alert">
            {guestsError}
          </p>
        )}
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
        <button type="submit" aria-label="On Click" disabled={!formIsValid}>
          Submit reservation
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
