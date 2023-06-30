import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 37.7749, // Latitudine del centro iniziale
          lng: -122.4194 // Longitudine del centro iniziale
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDv62JMRs70J9-wjo6oKVl1OOtNMQhhOnw' 
})(MapContainer);

