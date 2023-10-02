
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

const Booking = () => {
    return (
      <div>
          <Hero heading='Rezervo' message='Ketu mund te rezervosh dhomen qe deshiron' />
          <Slider slides={SliderData} />
       
      </div>
    )
  }
  
  export default Aktivitet
