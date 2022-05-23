
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Weather from './pages/Weather';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchNews from './pages/SearchNews';
import PopularNews from './pages/PopularNews';
import Events from './pages/Events';


const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/news?city=Berlin&tim e=day")// TODO replace query params by state variabls
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message)
      }
      );
  }, []);

  return (

    <>

      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search-news" element={<SearchNews />} />
        <Route path="/popular-news" element={<PopularNews />} />
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/events" element={<Events />} />

      </Routes> 
    </>
  )
}


export default App;
