import { useState } from 'react';


const people = [
  {
    name: 'Hotel Toni ',
    role: 'Miresevini ',
    imageUrl:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211722837.jpg?k=67f6c703967e2337b473a0a1a465f7d3e3f8816ec087050cd2cf5bdc3f1d4f1a&o=&hp=1',

  },

  {
    name: 'Dhome me krevat dopio + ballkon + tv',
    role: 'Dhome cift',
    imageUrl:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211722857.jpg?k=bb5ee4cd953b0a1e17625ef2c3b4d24170e028ae5ed5ee8a5d17d329abd0a0d8&o=&hp=1',

  },
  {
    name: 'Dhome + ballkon + tv',
    role: 'Dhome cift me pamje nga Lindja',
    imageUrl:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211722877.jpg?k=b31191fcd8015f96eb3034c19ee6b9ab48386c1ec80298a2ad535de4ae56abb0&o=&hp=1',

  },
  {
    name: 'Ballkoni per tu relaksuar nga ana e siperme e hotelit me pamje nga pishat ',
    role: 'Korridori ',
    imageUrl:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211722873.jpg?k=562f75368e73987557e5fd332e4750bc3cccaab6bfb6deb10050178e28e35a6b&o=&hp=1',

  },
  {
    name: 'Ballkoni per tu relaksuar nga ana e poshtme e hotelit me pamje nga rruga dhe parku i llogarase ',
    role: 'Korridori ',
    imageUrl:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211722872.jpg?k=a50a3fba0122d90fe906167c4e6397c208da6df675d0d3211aff017b4297195b&o=&hp=1',

  },
  {
    name: 'Dhome familjare me nje krevat dopio dhe 2 krevate te vegjel.',
    role: 'Dhome familjare',
    imageUrl:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211722884.jpg?k=287aac1d8f1e24f4a9b27cf67ca122e22869f6f0c75e0432751773e7bf385b05&o=&hp=1',

  },
]

export default function Dhomat() {
  const [reservation, setReservation] = useState('');

 const reservo = (personName)=> {
  setReservation(`Reservation per ${personName} u krijua me sukses!`);
  }


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <button
              type="button"
              className="rounded bg-black/10 px-2 py-1 text-sm font-semibold text-black shadow-sm hover:bg-white/20"

               onClick ={() => reservo(person.name)}>Rezervo</button>
                <p>{reservation}</p>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
