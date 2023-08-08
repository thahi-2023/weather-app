
import React from 'react'
import "./displayweather.css";

function DisplayWeather({data}) {
    
  
  const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}`
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
            {Math.floor((data.main.temp - 273.15)* 1.8) + 32} &#8457;F
            
                
            </h1>
            <span className="weather-main">
            {data.weather[0].main}
             <img src={iconurl} alt='weather image' className='weather-icon'/>
            </span>
            <span className='weather-description'>
              {""}
               {data.weather[0].description}{""}
                </span>
        </div>

        
        </div>)
}

export default DisplayWeather;