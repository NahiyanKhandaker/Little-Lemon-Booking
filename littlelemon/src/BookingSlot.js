import React from "react";

function BookingSlot({ time, date, guests, occasion, status }) {
  const isBooked = status === "booked";
  return (
    <li className={`booking-slot booking-slot--${status}`}>
      <div className="slot-header">
        <span className="slot-time">{time}</span>
        <span className="slot-status">{isBooked ? "Booked" : "Available"}</span>
      </div>
      {date && <div className="slot-date">{date}</div>}
      {isBooked && (
        <div className="slot-details">
          <span>{guests} guest{guests === 1 ? "" : "s"}</span>
          <span>{occasion}</span>
        </div>
      )}
    </li>
  );
}

export default BookingSlot;
