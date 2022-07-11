import './WeatherCard.css'
import { useState } from 'react'
import sunnyIcon from '../images-and-videos/clear-sky.png'
import cloudyIcon from '../images-and-videos/cloudy.png'
import rainyIcon from '../images-and-videos/Rainy.png'


const WeatherCard = (props) => {

  const [text, setText] = useState('')

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
           
           {props.data.city ? 
            <h1> {props.data.city.name} </h1>
           : null}
       

           {props.data.list[0] ?

            <h1>{Math.round(props.data.list[0].main.temp)} °C</h1>

            : null}

          {props.data.list[0].weather[0] ?
            <>
              <h2> {props.data.list[0].weather[0].description}</h2>

              {props.data.list[0].weather[0].main.includes('Clouds') &&

                <img className="w-logo" src={cloudyIcon} alt="cloudy-pic" />}

              {props.data.list[0].weather[0].main.includes('Clear') &&

                <img className="w-logo" src={sunnyIcon} alt="sunny-pic" />}

              {props.data.list[0].weather[0].main.includes('Rain') &&

                <img className="w-logo" src={rainyIcon} alt="rainy-icon" />}

            </>
            : null
          } 

           {props.data.list[0] ?
            <p> Feels like: {Math.round(props.data.list[0].main.feels_like)} </p>
            : null}

          {props.data.list[0] ?
            <p> Humidity: {props.data.list[0].main.humidity}</p>
            : null}
        </div>

      </div>
    </>
  )
}

export default WeatherCard;