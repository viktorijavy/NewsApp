import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import loading from '../images-and-videos/Design ohne Titel (2).gif'
import './SearchNews.css'

const SearchNews = () => {

    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('JavaScript')
    const [isLoading, setIsLoading] = useState(true)

    const fetchArticles = useCallback((searchQuery) => {   
        axios.get(searchQuery)
            .then((response) => {              
                setArticles(response.data.payload.articles)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setArticles, setIsLoading])

    const handleSearch = (e) => {
        e.preventDefault()
        const searchTerm = query ? `http://localhost:4000/news?search=${query}` : "http://localhost:4000/news"
        fetchArticles(searchTerm)
    }
    useEffect(() => {
        fetchArticles("http://localhost:4000/news")
    }, [])

    return (
        <div className="holder-container">
            <header className="showcase">
                <div className="overlay">
                    <h1 className='text-center'> viewing articles about {query}</h1>
                    <form onSubmit={handleSearch} className="form">
                        <input
                            className="input-text"
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="e.g. Trump"
                        />
                    </form>
                </div>
            </header>
            {isLoading ? (
                 <img src={loading} alt="" className="loading"/> 
            ) : (
                <section className='card grid'>
                     {articles.map(article =>
                        <ArticleCard key={Math.random().toString(32).slice(2, 8)} article={article} />
                    )}
                </section>
            )}
        </div>
    );
}

export default SearchNews