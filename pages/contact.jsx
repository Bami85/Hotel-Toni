import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
// import MapComponent from '../components/MapComponent'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
        {/* <MapComponent/> */}
    </div>
  )
}

export default contact