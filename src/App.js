// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Search from './components/Search';
// import ArticleCard from './components/ArticleCard';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchNews from './pages/SearchNews';
import PopularNews from './components/PopularNews';

const App = () => {

  return (

    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/searchNews" element={<SearchNews/>}/>
        <Route path="/popularNews" element={<PopularNews/>}/>

      </Routes>
    </>
  )
}


// const API_KEY = process.env.REACT_APP_API_KEY

// const [articles, setArticles] = useState([])
// const [query, setQuery] = useState('Trump')
// const [isLoading, setIsLoading] = useState(true)
// const [ popularArticles, setPopularArticles ] = useState([])


// useEffect(() => {
//   axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2022-02-13&sortBy=popularity&apiKey=${API_KEY}`)

//   // (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`)
//     .then((response) => {

//       console.log(response.data.articles)
//       setArticles(response.data.articles)
//       setIsLoading(false)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }, [query])


// useEffect(() => {
//   axios.get(`https://newsapi.org/v2/top-headlines?country=lt&apiKey=${API_KEY}`)
//   .then(response => {
//     console.log(response)
//     setPopularArticles(response.data.articles)
//   })
//   .catch(error => console.log(error))
// },[])

// return (


//   <div>
//     <header className="showcase">


//       <div className="overlay px-5">
//         <h1 className='text-center'> Articles about {query}</h1>

//         <Search searchText={(text) => setQuery(text)} />



//       </div>



//     </header>



//     {isLoading ? (<h1>Loading...</h1>) : (

//       <section className='grid grid-cols-1 px-5 pt-10 pb-20 gap-10'>
//         {articles.map(article =>

//           <ArticleCard   article={article} />
//         )}


//       </section>)}


//       {/* <h1> Trending News</h1>
//       <PopularNews/> */}
//     <section>

//     <h1> Trending news in Lithuania </h1>
//       {popularArticles.map(article => <ArticleCard   article={article} /> )}
//     </section>

//   </div>
// );


export default App;
