import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes = [], dispatchTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (reservation) => {
    setBookings((prev) => [...prev, reservation]);
    console.log("New reservation:", reservation);
    // Reset form
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("Birthday");
  };

  const handleDateChange = (val) => {
    setDate(val);
    if (dispatchTimes) dispatchTimes({ type: 'update', date: val });
  };

  return (
    <main className="booking-page">
      <section className="booking__container">
        <h1>Booking Page</h1>
        <BookingForm
          date={date}
          time={time}
          guests={guests}
          occasion={occasion}
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onTimeChange={setTime}
          onGuestsChange={setGuests}
          onOccasionChange={setOccasion}
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
}

export default BookingPage;
