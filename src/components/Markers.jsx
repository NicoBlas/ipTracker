import React from 'react'
import {Marker,Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import myIcon from "../assets/icon-location.svg"



const Markers = ({latitud,longitud}) => {
  return (
    <Marker position={{lat:latitud, lng:longitud}}>
      <Popup>
        Your IP coordinates!
     </Popup>
    </Marker>
  )
}

export default Markers