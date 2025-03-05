'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 31.471321682335628, 
  lng: 74.3091339237421, 
};

export default function Map() {
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAstoyBSzNks1q-0dH5tpyHLT1YFmByW04",
    libraries: ['places'], 
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
