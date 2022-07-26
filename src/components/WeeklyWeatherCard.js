import React from 'react'
import sunnyIcon from '../images-and-videos/clear-sky.png'
import cloudyIcon from '../images-and-videos/cloudy.png'
import rainyIcon from '../images-and-videos/Rainy.png'
import './WeatherCard.css'

const WeeklyWeatherCard = (props) => {

const date = props.data.list.map(listItem => {
  const day = listItem.dt_txt
  const temp = listItem.main.temp
  return [day, temp]
 }).filter(dateItem => { 
  return dateItem[0].includes('15:00:00') 
 })

 console.log('date', date)
  
  return (

    <div className="weather-card-text">
         
    <div className="daily-w-summary">
     <p>{date[0][0].slice(5,10)}</p> 
     <img className="daily-w-logo" src={cloudyIcon} alt="" />
     <p>{Math.round(date[0][1])}°C</p>
    </div>
    <div className="daily-w-summary">
    <p>{date[1][0].slice(5,10)}</p> 
     <img className="daily-w-logo" src={cloudyIcon} alt="" />
     <p> {Math.round(date[1][1])}°C</p>
    </div>
    <div className="daily-w-summary">
    <p>{date[2][0].slice(5,10)}</p> 
     <img className="daily-w-logo" src={cloudyIcon} alt="" />
     <p>{Math.round(date[2][1])}°C</p>
    </div>
    <div className="daily-w-summary">
    <p>{date[3][0].slice(5,10)}</p> 
     <img className="daily-w-logo" src={cloudyIcon} alt="" />
     <p> {Math.round(date[3][1])}°C</p>
    </div>
    <div className="daily-w-summary">
    <p>{date[4][0].slice(5,10)}</p> 
     <img className="daily-w-logo" src={cloudyIcon} alt="" />
     <p> {Math.round(date[4][1])}°C</p>
    </div>


   </div>

  )
}

export default WeeklyWeatherCard