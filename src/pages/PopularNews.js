import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import Search2 from '../components/Search2';





const PopularNews = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [articles, setArticles] = useState([])
    const [ country, setCountry ] = useState('us')


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
            .then(response => {
                console.log(response)
                setArticles(response.data.articles)
            })
            .catch(error => console.log(error))
    }, [country])


  
    return (
        

        <>



            <header  className="showcase">
                <div className="overlay">
                    <h1 className='text-center'> Popular news in {country} </h1>
                    <Search2 searchCountry={(text) => setCountry(text)}/>
                </div>

            </header>

          <section className='grid grid-cols-3 gap-3 card'>

                {articles.map(article => <ArticleCard article={article}/>)}
 
            </section>


        </>
    )
}

export default PopularNews