import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Offers from '../components/[Offers]'

const Rooms = () => {
  return (
    <div>
        <Hero heading='Rooms comming soon' message='Kto jan disa nga dhomat qe mund te reservoni ne Hotell Toni' />
      
        <Offers/>
        <Portfolio />
    </div>
  )
}

export default Rooms