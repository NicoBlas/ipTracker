import React, { useEffect } from 'react'
import {MapContainer,TileLayer,Popup,useMap} from "react-leaflet"

import Markers from './Markers'
import icon from "../assets/icon-location.svg"



function MyComponent({latitud,longitud}) {

  useEffect(()=>{
    map.panTo([latitud,longitud]);
  },[latitud,longitud])
  
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

const MapView = ({latitud, longitud}) => {
  
  return (
    <MapContainer center={{lat:latitud, lng:longitud}} zoom={13}>
      <MyComponent latitud={latitud} longitud={longitud} />
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers latitud={latitud} longitud={longitud}>
        
      </Markers>
        
    </MapContainer>
  )
}

export default MapView