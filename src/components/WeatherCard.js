import './WeatherCard.css'
import { useState } from 'react'

const WeatherCard = (props) => {
   
 const [ text, setText ] = useState('')

 const handleSubmit = e => {
   e.preventDefault()
   props.searchCity(text)
   
 
 }

  return (


    <>
      <div className="weather-card">

       <div>
       <form onSubmit={handleSubmit}>
          <input 
          type="text"
          className="weather-search"
          placeholder='search by city'
          onChange={(e) => setText(e.target.value)}
          />
          </form>
        </div>

        <div className="weather-card-text">

          <h1> {props.data.name} </h1>


          {props.data.main ?
            <h1>{Math.round(props.data.main.temp)} °C</h1>
            : null}

          {props.data.weather ?
            <h3> {props.data.weather[0].description} </h3>
            : null}

          {props.data.main ?
            <p> Feels like: {Math.round(props.data.main.feels_like)} </p>
            : null}

          {props.data.main ?
            <p> Humidity: {props.data.main.humidity}</p>
            : null}
        </div>



      </div>
    </>
  )
}

export default WeatherCard;