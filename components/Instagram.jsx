import React from 'react'
import Room from '../public/room.jpeg';
import Ballore from '../public/ballore.jpeg';
import Ballkon from '../public/ballkon.jpeg';
import Korridor from '../public/korridor.jpeg';

import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'></p>
        <p className='pb-4'></p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Room} />
            <InstagramImg socialImg={Ballore} />
            <InstagramImg socialImg={Ballkon} />
            <InstagramImg socialImg={Korridor} />
            {/* <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        */}
        </div>
    </div>
  )
}

export default Instagram