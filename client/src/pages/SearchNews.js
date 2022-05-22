import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import ArticleCard from '../components/ArticleCard';
import './SearchNews.css'


const SearchNews = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('Ukraine')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2022-03-20&sortBy=popularity&apiKey=${API_KEY}`)

            .then((response) => {

                console.log(response.data)
                setArticles(response.data.articles)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [query, API_KEY])


    return (

        <div>

            <header className="showcase">
                <div className="overlay">
                    <h1 className='text-center'> viewing articles about {query}</h1>

                    <Search searchText={(text) => setQuery(text)} />
                </div>

            </header>

            {isLoading ? (

                <h1>Loading...</h1>

            ) : (

                <section className='card grid'>

                    {articles.length === 0 ? <p>Nothing to show here</p> : articles.map(article =>

                        <ArticleCard key={Math.random().toString(32).slice(2, 8)} article={article} />
                    )}


                </section>
            )}
        </div>
    );
}

export default SearchNews