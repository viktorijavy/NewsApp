import { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundvideo from '../images-and-videos/rainy.mp4'
import cloudyBackground from '../images-and-videos/cloudySky.mp4'
import sunnyBackground from '../images-and-videos/sunshine.mp4'
import WeatherCard from '../components/WeatherCard';
import './Weather.css';

const Weather = () => {

    const API_KEY2 = process.env.REACT_APP_WEATHER_API_KEY

    const [city, setCity] = useState('druskininkai')
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY2}`)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })

            .catch(error => console.log(error))
    }, [city, API_KEY2])


    return (

        <>
            <div className='video-wrapper'>
                {data.list ?
                    <>

                    <video className="video1" autoPlay="autoplay" loop="loop" muted>

                        {data.list[0].weather[0].main.includes('Clouds') && <source
                            src={cloudyBackground}
                            type="video/mp4"
                        />}

                        {data.list[0].weather[0].main.includes('Rain') && <source
                            src={backgroundvideo}
                            type="video/mp4"
                        />}

                        {data.list[0].weather[0].main.includes('Clear') && <source
                            src={sunnyBackground}
                            type="video/mp4"
                        />}

                    </video>
                        <WeatherCard data={data} searchCity={(text => setCity(text))} />
                    </>
                    : null}



            </div>

        </>
    )
}

export default Weather