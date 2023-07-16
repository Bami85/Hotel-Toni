// import React from 'react'
// import Contact from '../components/Contact'
// import Hero from '../components/Hero'
// // import MapComponent from '../components/MapComponent'

// const contact = () => {
//   return (
//     <div>
//         <Hero heading='' message='PER ME SHUME INFORMACIONE NA KONTAKTONI NE NUMRIN E TELEFONIT OSE NA SHKRUAJ NE FORMULARIN ME POSHTE' />
//         <Contact />
//         {/* <MapComponent/> */}
//     </div>
//   )
// }

// export default contact

import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '0765876515'; // Replace with your WhatsApp phone number
    const message = 'I would like to make a booking.'; // Replace with your desired message

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <Hero heading='' message='PER ME SHUME INFORMACIONE NA KONTAKTONI NE NUMRIN E TELEFONIT OSE NA SHKRUAJ NE FORMULARIN ME POSHTE' />
      <Contact />
      <button onClick={handleWhatsAppBooking}>Book via WhatsApp</button>
    </div>
  );
};

export default contact;
