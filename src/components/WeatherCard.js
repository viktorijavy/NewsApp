import { data } from "autoprefixer";

const WeatherCard = (props) => {

  // const fToC = num => {
  //     return  (num-32) * 5/9
  //    }
  return (
    <>
      <div className="w-overlay">
        <h1 className="w-h1"> {props.data.name} </h1>
       


        {props.data.main ? <h1>{Math.round(props.data.main.temp)} °C</h1> : null}
        {props.data.weather ? <h3> {props.data.weather[0].description} </h3> : null} 
        {props.data.main ? <p> Feels like: {Math.round(props.data.main.feels_like)} </p> : null}
        {props.data.main ? <p> Humidity: {props.data.main.humidity}</p> : null}


      </div>
    </>
  )
}

export default WeatherCard;