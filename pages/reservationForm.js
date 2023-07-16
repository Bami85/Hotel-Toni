import React from 'react'
import ReservationForm from '../components/ReservationForm'
import Offers from '../components/Offers'
import Hero from '../components/Hero'

const reservationForm = ({ selectedRoomId, handleReservationConfirmed }) => {
  return (
    <div>
      {/* <ReservationForm  heading='REZERVO TANI' Offers = {Offers}/> */}

      <Offers
        roomId={selectedRoomId}
        onReservationConfirmed={handleReservationConfirmed}
        ReservationForm={ReservationForm}
      />
    </div>
  )
}

export default reservationForm
