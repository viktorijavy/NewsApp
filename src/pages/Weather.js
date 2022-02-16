import { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundvideo from '../rain.mp4'
import cloudyBackground from '../clouds.mp4'
import WeatherCard from '../components/WeatherCard';



const Weather = () => {

    const API_KEY2 = process.env.REACT_APP_WEATHER_API_KEY

    // const [data, setData] = useState('')
    const [city, setCity] = useState('Berlin')
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY2}`)
            .then(response => {
                console.log(response)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }, [])




    return (


        <>

            {/* <div className="weather-background-container"> */}

            <div className='weather-background'>

                {!data.weather[0].main.includes('Cloud') ?
                    <video className="video" autoPlay="autoplay" loop="loop" muted>



                        <source
                            src={backgroundvideo}
                            type="video/mp4"
                        />


                    </video>
                    :

                    <video className="video" autoPlay="autoplay" loop="loop" muted>



                        <source
                            src={cloudyBackground}
                            type="video/mp4"
                        />


                    </video>
                }







                <WeatherCard data={data} />

                {/* <div className="w-overlay">
                        <h1> {city} </h1>
                         {data.main.temp ?<div>{data.main.temp} </div>: <div> not available </div>}
                        <div> Feels like:  {data.main.feels_like}</div> 
                    </div> */}
            </div>
            {/* </div> */}



        </>
    )
}

export default Weather