
import { useEffect,useState } from 'react';
import './App.css';
import MapView from './components/MapView';
import FormSearcher from './components/form/FormSearcher';
import Header from './components/header/Header';

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

  const URL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_pH1lYTBPjH6vrJguTwHjauji4H0cf&ipAddress="+ipDirection
  useEffect(()=>{
    obtenerDatos()
        
  },[])

  const obtenerDatos = async () => {
    const data = await fetch(URL)
    const response = await data.json()
    console.log("data location es",response)
    setDataIP(response)
  }
  

  return (
    <div className='App'>
      
      <Header IpAddress={ipDirection} location= {dataIP.location.city + ", " +dataIP.location.region } timeZone={dataIP.location.timezone} ISP={dataIP.isp} />
      <MapView latitud={longLat.lat} longitud={longLat.lng}/>
      
    </div>
  
  );
}

export default App;
