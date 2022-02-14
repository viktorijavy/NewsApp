import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
//  import ArticleCard from './ArticleCard';


const PopularNews = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [articles, setArticles] = useState([])


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=lt&apiKey=${API_KEY}`)
            .then(response => {
                console.log(response)
                setArticles(response.data.articles)
            })
            .catch(error => console.log(error))
    }, [])

   


  
    return (
        

        <div>
            <header className="showcase">
                <div className="overlay px-5">
                    <h1 className='text-center'> Popular news in Lithuania </h1>

                
                </div>

            </header>


            <section className='grid grid-cols-3 gap-3 card'>

               

                {articles.map(article => <ArticleCard article={article}/>)}

              
            </section>


        </div>
    )
}

export default PopularNews