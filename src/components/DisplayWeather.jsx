
import React from 'react'
import "./displayweather.css";

function DisplayWeather({data}) {
  return (
    <div className='displayweather'>
        <div className='maincard'>
            <span className='cardtitle'>
            {data.name} , {data.sys.country}.weather
            </span>
            <span className='cardsubtitle'>
                As of {new Date().toLocaleTimeString()}

            </span>
            <h1>
            {Math.floor(data.main.temp - 273.15)}
            
                
            </h1>
        </div>

    </div>
  )
}

export default DisplayWeather