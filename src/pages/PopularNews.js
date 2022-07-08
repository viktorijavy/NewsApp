import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';



const PopularNews = () => {



    const [articles, setArticles] = useState([])
    const [country, setCountry] = useState('lt')

    const handleCountry = (e) => {
        e.preventDefault()
    }


    useEffect(() => {
        axios.get('http://localhost:4000/country-news')
            .then(response => {
                console.log(response)
                setArticles(response.data.payload.articles)

            })
            .catch(error => console.log(error))
    }, [])

    return (

        <div className="holder-container">
            <header className="showcase">
                <div className="overlay">
                    <h1 className='text-center'> Trending news in {country} </h1>



                    <form onSubmit={handleCountry} className="form">
                        <input
                            className="input-text"
                            type="text"
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder=" type in country code, e.g. lt"

                        />


                    </form>

                </div>

            </header>

            <section className='card grid'>

                {articles.map(article => <ArticleCard key={Math.random().toString(32).slice(2, 8)} article={article} />)}

            </section>

        </div>
    )
}



export default PopularNews