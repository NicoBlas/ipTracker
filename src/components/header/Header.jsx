import React from 'react'
import "./header.css"
import FormSearcher from '../form/FormSearcher'
import IPInfo from '../ipinfo/IPInfo'

const Header = ({IpAddress,location,timeZone,ISP}) => {
  return (
    <div className='header'>
      <h1>IP Adress Tracker</h1>
      <FormSearcher />
      <IPInfo IpAddress={IpAddress} location= {location} timeZone={timeZone} ISP={ISP} />
    </div>
  )
}

export default Header