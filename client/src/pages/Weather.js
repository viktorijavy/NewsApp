import { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundvideo from '../rainy.mp4'
import cloudyBackground from '../cloudySky.mp4'
import sunnyBackground from '../sunshine.mp4'
import WeatherCard from '../components/WeatherCard';

const Weather = () => {



    const API_KEY2 = process.env.REACT_APP_WEATHER_API_KEY

    const [city, setCity] = useState('berlin')
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY2}`)

            // `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid={API_KEY2}`

            .then(response => {


                setData(response.data)
                console.log(response.data)
            })

            .catch(error => console.log(error))
    }, [city, API_KEY2])


    return (

        <>
            <div className='video-wrapper'>


                {data.weather ?

                    <video className="video1" autoPlay="autoplay" loop="loop" muted>

                        {data.weather[0].description.includes('clouds') && <source
                            src={cloudyBackground}
                            type="video/mp4"
                        />}

                        {data.weather[0].description.includes('rain') && <source
                            src={backgroundvideo}
                            type="video/mp4"
                        />}

                        {data.weather[0].description.includes('clear') && <source
                            src={sunnyBackground}
                            type="video/mp4"
                        />}

                    </video>
                    : null}

                <WeatherCard data={data} searchCity={(text => setCity(text))} />

            </div>

        </>
    )
}

export default Weather