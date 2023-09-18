import React from 'react';
import Link from 'next/link';
import MapComponent from '../components/MapComponent';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import Hero from '../components/Hero';

const contact = ({message, heading,description}) => {
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
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
    <div className='p-5 text-white z-[2] mt-[-10rem]'>
      <p className='text-4xl font-bold tracking-tight text-white sm:text-6xl text-center'>{heading} </p>
      <h2 className='mx-auto max-w-2xl text-center font-bold  '>{message}</h2>
    
      <p className="mt-6 text-lg leading-8 text-gray-300"> {description}</p>
      <Link href="/reservationForm">
        <button className='px-8 py-2 border mr-4'>Prenoto tani Online</button>
      </Link>
      <button className='px-8 py-2 bg-green-500 text-white border rounded' onClick={handleWhatsAppBooking}>
        Rezervo në WhatsApp
      </button>
    </div>

    <div className='p-5 text-white z-[2] mt-[-10rem]'></div>
  </div>
  <Contact/>
  <Footer/>
  </>
  );
};

export default contact;
