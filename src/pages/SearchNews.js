import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import ArticleCard from '../components/ArticleCard';
import './SearchNews.css'


const SearchNews = () => {

    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('Ukraine')
    const [isLoading, setIsLoading] = useState(true)

    

    useEffect(() => {
        axios.get('http://localhost:4000/news') // TODO put host (not endpoint /api) in seperate env vairable because in production will be different

            .then((response) => {
                console.log(response)
                setArticles(response.data.payload.articles)
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