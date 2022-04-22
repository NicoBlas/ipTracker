
import { useEffect,useState } from 'react';
import './App.css';
import MapView from './components/MapView';
import Header from './components/header/Header';
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function App() {
  
  const [ipDirection, setIpDirection] = useState("190.247.253.105")
  const [longLat, setLongLat] = useState({lat: -34.65183,lng: -58.63963})
  const [dataIP, setDataIP] = useState({isp:"Telecom Argentina S.A", location:{city: "Castelar",
  country: "AR",
  geonameId: 3435607,
  lat: -34.65183,
  lng: -58.63963,
  postalCode: "",
  region: "Buenos Aires",
  timezone: "-03:00"}})

  const URL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_c7iBJvyKOPBzjLB2JyXk9VCNij4RA&ipAddress="+ipDirection
  useEffect(()=>{
    obtenerDatos()
        
  },[ipDirection])

  const obtenerDatos = async () => {
    const data = await fetch(URL)
    const response = await data.json()
    console.log("data location es",response)
    setDataIP({isp:response.isp, location:{city: response.location.city,
      country: response.location.country,
      geonameId: response.location.geonameId,
      lat: response.location.lat,
      lng: response.location.lng,
      postalCode: response.location.postalCode,
      region: response.location.region,
      timezone: response.location.timezone}})
  }
  

  return (
    <div className='App'>
      
      <Header IpAddress={ipDirection} location= {dataIP.location.city + ", " +dataIP.location.region } timeZone={dataIP.location.timezone} ISP={dataIP.isp} ipDirection = {ipDirection} setIpDirection={setIpDirection} />
      <MapView latitud={dataIP.location.lat} longitud={dataIP.location.lng}/>
      
    </div>
  
  );
}

export default App;
