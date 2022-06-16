import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map({data}) {
    const height = document.querySelector('#mapContainer').offsetHeight+"px"
    console.log(height);
  return <MapContainer id='map' center={{ lat: data?.lat, lng: data?.long }}
  zoom={10}
 style={{height:height}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[data?.lat, data?.long]}>
    <Popup>
      <h2>{data?.location}</h2>
      {data?.carrier}
    </Popup>
  </Marker>
</MapContainer>
}

export default Map;
