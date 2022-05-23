import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import Search2 from '../components/Search2';


const PopularNews = () => {

    

    const [articles, setArticles] = useState([])
    const [ country, setCountry ] = useState('lt')


    useEffect(() => {
        axios.get('http://localhost:4000/country-news')
            .then(response => {
                console.log(response)
                setArticles(response.data.payload.articles)
                
            })
            .catch(error => console.log(error))
    }, [])

    return (
    
        <>
            <header  className="showcase">
                <div className="overlay">
                    <h1 className='text-center'> Trending news in {country} </h1>
                    
                    <Search2 searchCountry={(text) => setCountry(text)}/>
                </div>

            </header>

          <section className='card grid'>

                {articles.map(article => <ArticleCard key={Math.random().toString(32).slice(2,8)} article={article}/>)}
 
            </section>

        </>
    )
}



export default PopularNews