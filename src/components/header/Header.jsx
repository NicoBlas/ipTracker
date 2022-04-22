import React from 'react'
import "./header.css"
import FormSearcher from '../form/FormSearcher'
import IPInfo from '../ipinfo/IPInfo'

const Header = ({IpAddress,location,timeZone,ISP,ipDirection, setIpDirection}) => {
  return (
    <div className='header'>
      <h1>IP Adress Tracker</h1>
      <FormSearcher ipDirection={ipDirection} setIpDirection={setIpDirection}/>
      <IPInfo IpAddress={ipDirection} location= {location} timeZone={timeZone} ISP={ISP} />
    </div>
  )
}

export default Header