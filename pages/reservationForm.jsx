import React from 'react'
import ReservationForm from '../components/ReservationForm'
import Offers from '../components/Offers'
import Hero from '../components/Hero'
import Link from 'next/link'

const reservationForm = ({ selectedRoomId, handleReservationConfirmed }) => {
  return (
    <div>
      {/* <ReservationForm  heading='REZERVO TANI' Offers = {Offers}/> */}
      <Link href ="/reservationForm">
      <Offers
     
        roomId={selectedRoomId}
        onReservationConfirmed={handleReservationConfirmed}
        ReservationForm={ReservationForm}
      />
      </Link>
    </div>
  )
}

export default reservationForm
