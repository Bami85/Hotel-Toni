import React from 'react';
import Link from 'next/link';

const Hero = ({ heading, message }) => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '046765876515';
    const whatsappMessage = 'Dua te rezervoj ne Hotel Toni'; // Replace with your desired message

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-video'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-xl'>{message} </p>
          <Link href="/reservationForm">
            <button className='px-8 py-2 border mr-4'>Prenoto tani Online</button>
          </Link>
          <button className='px-8 py-2 bg-green-500 text-white border rounded' onClick={handleWhatsAppBooking}>
            Rezervo në WhatsApp
          </button>
        </div>

        <div className='p-5 text-white z-[2] mt-[-10rem]'></div>
      </div>
    </>
  );
};

export default Hero;
