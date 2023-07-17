import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const MapComponent = () => {
  const mapStyles = {
    height: '300px',
    width: '80%',
    borderRadius: '0px',
  }

  const center = {
    lat: 40.2165367,
    lng: 19.5795544,
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <LoadScript googleMapsApiKey="AIzaSyBaPcIU0NIkQfHvOetcD8CPhMKsrfrxtLg">
        <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={13}>
     
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapComponent
