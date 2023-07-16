import React from 'react';

import Hero from '../components/Hero';

const contact = () => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '046736270328'; 
    const message = 'Dua te reservoj ne Hotel Toni'; // Replace with your desired message

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <Hero heading='' message='PER ME SHUME INFORMACIONE NA KONTAKTONI NE NUMRIN E TELEFONIT OSE NA SHKRUAJ NE FORMULARIN ME POSHTE' />
      <button onClick={handleWhatsAppBooking}>Rezervo ne WhatsApp</button>
    </div>
  );
};

export default contact;
