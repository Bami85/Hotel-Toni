import React, { useState } from 'react';

const ReservationForm = ({ roomId, onReservationConfirmed }) => {
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate reservationData and make reservation in MongoDB
    // ... Your reservation logic goes here ...

    // Call the onReservationConfirmed function passed from the parent component
    onReservationConfirmed(roomId);

    // Reset form
    setReservationData({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Fill in the reservation form:</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationData.name}
            onChange={handleInputChange}
            className="rounded border-gray-300 px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={reservationData.email}
            onChange={handleInputChange}
            className="rounded border-gray-300 px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="mb-1">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={reservationData.phone}
            onChange={handleInputChange}
            className="rounded border-gray-300 px-3 py-2"
          />
        </div>
        <button type="submit" className="rounded bg-black/10 px-2 py-1 text-sm font-semibold text-black shadow-sm hover:bg-white/20">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
