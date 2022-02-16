import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/Navbar';
import './SearchNews.css'


const SearchNews = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('Trump')
    const [isLoading, setIsLoading] = useState(true)
    // const [ popularArticles, setPopularArticles ] = useState([])


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2022-02-13&sortBy=popularity&apiKey=${API_KEY}`)


            .then((response) => {

                console.log(response.data.articles)
                setArticles(response.data.articles)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [query])


    return (


        <div>

       
            <header className="showcase">
                <div className="overlay">
                    <h1 className='text-center'> viewing articles about {query}</h1>

                    <Search searchText={(text) => setQuery(text)} />
                </div>

            </header>



            {isLoading ? (<h1>Loading...</h1>) : (

                <section className='grid grid-cols-3 gap-3 card'>
                    {articles.map(article =>

                        <ArticleCard article={article} />
                    )}


                </section>)}





        </div>
    );
}

export default SearchNews