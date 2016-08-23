import React from 'react';
import { GoogleMapLoader, GoogleMaps } from 'react-google-maps';


export default (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{ height: 100% }} /> }
      />
  );
}
