import React from 'react';
import MapComponent from '../components/MapComponent';

import Hero from '../components/Hero';

const contact = () => {

  return (
    <div>
      <Hero heading='' message='PER ME SHUME INFORMACIONE NA KONTAKTONI NE NUMRIN E TELEFONIT OSE NA SHKRUAJ NE FORMULARIN ME POSHTE' />

      <MapComponent  MapComponent={MapComponent} />
    </div>
  );
};

export default contact;
