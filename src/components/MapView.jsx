import React from 'react'
import {MapContainer,TileLayer,Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Markers from './Markers'

const MapView = ({latitud, longitud}) => {
  return (
    <MapContainer center={{lat:latitud, lng:longitud}} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers>
            <Popup>
                HOLA
            </Popup>
        </Markers>
        
    </MapContainer>
  )
}

export default MapView