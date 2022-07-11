import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import loading from '../images-and-videos/Design ohne Titel (2).gif'
import './SearchNews.css'



const SearchNews = () => {

    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const handleSearch = (e) => {
        e.preventDefault()
        
    }

    useEffect(() => {
        
        const searchTerm = query ? `http://localhost:4000/news?search=${query}` :  "http://localhost:4000/news"
       
        axios.get(searchTerm) // TODO put host (not endpoint /api) in seperate env vairable because in production will be different

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

                    {articles.length === 0 ? <p>Nothing to show here</p> : articles.map(article =>

                        <ArticleCard key={Math.random().toString(32).slice(2, 8)} article={article} />
                    )}


                </section>
            )}
        </div>
    );
}

export default SearchNews