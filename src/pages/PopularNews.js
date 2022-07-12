import React, { useCallback } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import loading from '../images-and-videos/Design ohne Titel (2).gif'



const PopularNews = () => {

    const [articles, setArticles] = useState([])
    const [country, setCountry] = useState('us')
    const [isLoading, setIsLoading] = useState(true)


    const fetchArticles = useCallback((searchQuery) => {
        axios.get(searchQuery)
        .then(response => {
                    console.log(response)
                    setArticles(response.data.payload.articles)
                    setIsLoading(false)
        
                })
                .catch(error => console.log(error))
    }, [])
    
    const handleCountry = (e) => {
        e.preventDefault()
        fetchArticles(`http://localhost:4000/country-news?search=${country}`)
    }

    useEffect(() => {
      fetchArticles(`http://localhost:4000/country-news?search=${country}`)
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
                        <button type="submit">Search</button>
                    </form>

                </div>

            </header>

            {isLoading ? (
                <img src={loading} alt="" className="loading"/>
            ) : (
                <section className='card grid'>

                    {articles.map(article => <ArticleCard key={Math.random().toString(32).slice(2, 8)} article={article} />)}

                </section>

            )}


        </div>
    )
}



export default PopularNews