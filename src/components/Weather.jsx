
import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
    
    const [form, setForm] = useState({
      city: "",
      country: "",
    });

    const [weather, setWeather] =useState([

    ]);

    const APIKEY = '6af611285b147230ddf89174c90a27d2'

    async function weatherData(e) {
       e.preventDefault()
        if (form.city=== "") {
            alert("Add values");
        } else {
            const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)

            const data = await res.json()
            console.log(data)
            setWeather({data: data})
            
        }
    }

 

 
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input 
         onChange = {handleChange}
          type="text"
          placeholder="city"
          name="city"
          
        />
        
        <input
         onChange = {handleChange}
          type="text"
          placeholder="Country"
          name="country"
          
        />
        <button className="getweather" onClick={weatherData}>
          Submit
        </button>
      </form>
       
           {weather.data !== undefined ? (
            <div>
              <DisplayWeather data={weather.data} />
            </div>
          ) : null} 
       
     
     
    </div>
  );
}

export default Weather;