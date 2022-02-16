const WeatherCard = (props) => {

    // const fToC = num => {
    //     return  (num-32) * 5/9
    //    }
    return (
    <>
         <div className="w-overlay">
                        <h1 className="w-h1"> Berlin </h1>
                          <div> {Math.round(props.data.main.temp)} °C</div>
                      
                       
                         <div> feels like: {Math.round(props.data.main.feels_like)} </div> 
                         <div> Humidity: {props.data.main.humidity}</div> 


                    </div>
    </>
    )
}

export default WeatherCard;