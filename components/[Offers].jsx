import { useEffect, useState } from 'react';
import ReservationForm from './ReservationForm';
import Link from 'next/link';

export default function Dhomat() {
  const [rooms, setRooms] = useState([]);
  const [reservation, setReservation] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [reservations, setReservations] = useState([]);

  const fetchDataHandler = async (url, state) => {
    const response = await fetch(url);
    const data = await response.json();
    state(data.data);
  };

  useEffect(() => {
    fetchDataHandler('/api/rooms', setRooms);
  }, []);

  useEffect(() => {
    fetchDataHandler('/api/reservations', setReservations);
  }, []);

  console.log(rooms);
  console.log(reservations);

  const makeReservation = (roomId) => {
    setSelectedRoomId(roomId);
  };
  
  const handleReservationConfirmed = (reservationData, roomId) => {
    const { startDate, endDate } = reservationData;
  
    // Check if the room is already reserved for any date in the selected range
    const isRoomReserved = reservations.some(
      (reservation) =>
        reservation.roomId === roomId &&
        ((reservation.startDate <= startDate && startDate <= reservation.endDate) ||
          (reservation.startDate <= endDate && endDate <= reservation.endDate))
    );
  
    if (isRoomReserved) {
      setReservation(`This room is already reserved for the selected date range.`);
    } else {
      // Make the reservation and update the reservations list
      const newReservation = {
        roomId,
        startDate,
        endDate,
      };
      setReservations([...reservations, newReservation]);
      setReservation(`Reservation for room ${roomId} from ${startDate} to ${endDate} created successfully!`);
      setSelectedRoomId(null);
    }
  };

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {rooms &&
              rooms.map((room) => (
                <li key={room._id}>
                  {/* Render room details */}
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={room.imageUrl} alt="" />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{room.description}</h3>
                  <p className="text-base leading-7 text-gray-600">{room.price}</p>
                  <Link href = "/reservationForm">
                    <button
                      type="button"
                      className="rounded bg-black/10 px-2 py-1 text-sm font-semibold text-black shadow-sm hover:bg-white/20"
                      onClick={() => makeReservation(room._id)}
                    >
                      Rezervo
                    </button>
                  </Link>
                </li>
              ))}
          </ul>

          {selectedRoomId && (
            <ReservationForm roomId={selectedRoomId} onReservationConfirmed={(reservationData) => handleReservationConfirmed(reservationData, selectedRoomId)} />
          )}

          {reservation && <p className="mt-8">{reservation}</p>}
        </div>
      </div>
    </>
  );
}