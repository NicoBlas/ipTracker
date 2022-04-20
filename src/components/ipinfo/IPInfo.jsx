import React from 'react'
import "./ipInfo.css"

const IPInfo = ({IpAddress, location, timeZone, ISP}) => {
  return (
    <div className='ipInfo'>
        <div className='ipInfoDiv'>
            <p id="pTitle">IP ADDRESS</p>
            <p id="pDescription">{IpAddress}</p>
        </div>
        <div className='ipInfoDiv'>
            <p id="pTitle">LOCATION</p>
            <p id="pDescription">{location}</p>
        </div>
        <div className='ipInfoDiv'>
            <p id="pTitle" >TIMEZONE</p>
            <p id="pDescription" >{timeZone}</p>
        </div>
        <div className='ipInfoDiv'>
            <p id="pTitle" >ISP</p>
            <p id="pDescription">{ISP}</p>
        </div>
    </div>
  )
}

export default IPInfo
