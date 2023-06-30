import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Instagram from '../components/Instagram'

const Rooms = () => {
  return (
    <div>
        <Hero heading='Rooms comming soon' message='Kto jan disa nga dhomat qe mund te reservoni ne Hotell Toni' />
      
        <Instagram/>
        <Portfolio />
    </div>
  )
}

export default Rooms