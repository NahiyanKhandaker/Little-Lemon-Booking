import React, { useMemo, useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";

function BookingPage({ availableTimes = [], bookings = [], onDateChange, dispatchTimes, onBookingSubmit, selectedDate = "" }) {
  const date = selectedDate;
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const bookedSlots = useMemo(() => {
    if (!date) {
      return bookings;
    }
    return bookings.filter((booking) => booking.date === date);
  }, [bookings, date]);

  const handleSubmit = (reservation) => {
    if (onBookingSubmit) {
      onBookingSubmit(reservation);
    }
    setTime("");
    setGuests(1);
    setOccasion("Birthday");
  };

  const handleDateChange = (val) => {
    if (onDateChange) {
      onDateChange(val);
    }
  };

  return (
    <main id="main" className="booking-page">
      <section className="booking__container">
        <h1>Reserve a table</h1>
        <div className="booking-content">
          <div className="booking-form-panel">
            <BookingForm
              date={date}
              time={time}
              guests={guests}
              occasion={occasion}
              availableTimes={availableTimes}
              bookings={bookings}
              onDateChange={handleDateChange}
              dispatchTimes={dispatchTimes}
              onTimeChange={setTime}
              onGuestsChange={setGuests}
              onOccasionChange={setOccasion}
              onSubmit={handleSubmit}
            />
          </div>

          <aside className="booking-summary">
            <section className="booking-section">
              <h2>Available slots</h2>
              {availableTimes.length > 0 ? (
                <ul className="booking-slot-list">
                  {availableTimes.map((slot) => (
                    <BookingSlot key={slot} time={slot} status="available" />
                  ))}
                </ul>
              ) : (
                <p>No available times for {date || "the selected date"}.</p>
              )}
            </section>

            <section className="booking-section">
              <h2>Booked tables</h2>
              {bookedSlots.length > 0 ? (
                <ul className="booking-slot-list">
                  {bookedSlots.map((slot, index) => (
                    <BookingSlot
                      key={`${slot.date}-${slot.time}-${index}`}
                      date={slot.date}
                      time={slot.time}
                      guests={slot.guests}
                      occasion={slot.occasion}
                      status="booked"
                    />
                  ))}
                </ul>
              ) : (
                <p>There are no reservations yet for {date || "any date"}.</p>
              )}
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
