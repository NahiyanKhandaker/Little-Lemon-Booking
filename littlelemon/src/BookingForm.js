import { useMemo, useState } from "react";
import "./BookingForm.css";

function BookingForm({
  date,
  time,
  guests,
  occasion,
  availableTimes = [],
  onDateChange,
  onTimeChange,
  onGuestsChange,
  onOccasionChange,
  onSubmit,
  isSubmitting = false,
  delayMessage = '',
}) {
  const [touched, setTouched] = useState({ date: false, time: false, guests: false, occasion: false });
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

  const occasionError = useMemo(() => {
    if (!occasion || occasion.trim() === "") return "Please enter an occasion.";
    return "";
  }, [occasion]);

  const formIsValid = !dateError && !timeError && !guestsError && !occasionError;
  const showDateError = (touched.date || submitAttempted) && dateError;
  const showTimeError = (touched.time || submitAttempted) && timeError;
  const showGuestsError = (touched.guests || submitAttempted) && guestsError;
  const showOccasionError = (touched.occasion || submitAttempted) && occasionError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setSubmitAttempted(true);
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (!formIsValid) {
      return;
    }
    const normalizedOccasion = occasion
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
    const reservation = { date, time, guests, occasion: normalizedOccasion };
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
          onBlur={() => setTouched((prev) => ({ ...prev, occasion: true }))}
          onChange={(e) => {
            const val = e.target.value;
            setTouched((prev) => ({ ...prev, occasion: true }));
            onOccasionChange && onOccasionChange(val);
          }}
          required
          aria-invalid={!!occasionError}
          aria-describedby={showOccasionError ? 'occasion-error' : undefined}
        >
          <option value="" disabled>
            Choose occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Graduation">Graduation</option>
          <option value="Other">Other</option>
        </select>
        {showOccasionError && (
          <p id="occasion-error" className="field-error" role="alert">
            {occasionError}
          </p>
        )}
      </div>

      <div className="form-row">
        <button type="submit" disabled={!formIsValid || isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit reservation'}
        </button>
      </div>
      {(isSubmitting || delayMessage) && (
        <div className="submission-banner" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true" />
          <span>
            {delayMessage || 'Saving your reservation...'}
          </span>
        </div>
      )}
    </form>
  );
}

export default BookingForm;
