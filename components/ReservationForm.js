import React, { useState } from 'react';

const ReservationForm = ({ roomId, onReservationConfirmed }) => {
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onReservationConfirmed function passed from the parent component
    onReservationConfirmed(reservationData);
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-cover custom-img">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Prenoto dhome</h1>
        
        <form onSubmit={handleSubmit}>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <label htmlFor="Name" className="block mb-1">
              Emri
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
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
           <label htmlFor="email" className="block mb-1">
            E-mail
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
           <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <label htmlFor="phone" className="block mb-1">
            Telefon
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
        
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={reservationData.startDate}
            onChange={handleInputChange}
            className="rounded border-gray-300 px-3 py-2"
          />
            <input
            type="date"
            id="endDate"
            name="endDate"
            value={reservationData.endDate}
            onChange={handleInputChange}
            className="rounded border-gray-300 px-3 py-2"
          />
          <button type="submit" className="rounded bg-black/10 px-2 py-1 text-sm font-semibold text-black shadow-sm hover:bg-white/20">
          Confirmo Reservimin
        </button>
        </form>
        {/* <ul>
          <ul>
            {searchResults.map((result, i) => {
              return (
                <li key={i}>
                  <a href={result.flight_number} legacyBehavior>
                    {result.reg_number}
                  </a>
                </li>
              )
            })}
          </ul>
        </ul> */}
      </div>
    </div>
    </>
  );
};

export default ReservationForm;
