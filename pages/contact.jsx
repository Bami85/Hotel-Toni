import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
// import MapComponent from '../components/MapComponent'

const contact = () => {
  return (
    <div>
        <Hero heading='' message='PER ME SHUME INFORMACIONE NA KONTAKTONI NE NUMRIN E TELEFONIT OSE NA SHKRUAJ NE FORMULARIN ME POSHTE' />
        <Contact />
        {/* <MapComponent/> */}
    </div>
  )
}

export default contact