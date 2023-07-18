import React from 'react';

const PaymentForm = () => {
  return (
    <>
      <div className="mt-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Kortnummer
        </label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          autoComplete="off"
          required
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
            Giltighetstid
          </label>
          <input
            type="text"
            name="expirationDate"
            id="expirationDate"
            autoComplete="off"
            required
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
            CVV/säkerhetskod
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            autoComplete="off"
            required
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700">
          Kortinnehavarens namn
        </label>
        <input
          type="text"
          name="cardHolderName"
          id="cardHolderName"
          autoComplete="off"
          required
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  );
};

export default PaymentForm;
