import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData';

const Aktivitet = () => {
  return (
    <div>
        <Hero heading='Cfar mund te beni ne Llogara' message='Kto jan disa nga aktivitetet qe mund te beni ne llogora' />
        <Slider slides={SliderData} />
     
    </div>
  )
}

export default Aktivitet