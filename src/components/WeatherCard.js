import './WeatherCard.css'
import { useState } from 'react'
import sunnyIcon from '../clear-sky.png'
import cloudyIcon from '../cloudy.png'
import rainyIcon from '../Rainy.png'
// import sunCloudIcon from '../../public/cloudy-sun.png'

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

          <h1> {props.data.name} </h1>



          {/* <img src={sunnyPic} alt="sunny icon"/> */}

          {props.data.main ?


            <h1>{Math.round(props.data.main.temp)} °C</h1>



            : null}

          {props.data.weather ?
            <>
              <h2> {props.data.weather[0].description}</h2>

              {props.data.weather[0].description.includes('clouds') &&

                <img className="w-logo" src={cloudyIcon} alt="cloudy-pic" />}

              {props.data.weather[0].description.includes('clear') &&

                <img className="w-logo" src={sunnyIcon} alt="sunny-pic" />}

              {props.data.weather[0].description.includes('rain') &&

                <img className="w-logo" src={rainyIcon} alt="rainy-icon" />}

            </>
            : null
          }



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