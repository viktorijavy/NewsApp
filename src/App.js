import { Routes, Route } from 'react-router-dom';
import './App.css';
import Weather from './pages/Weather';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchNews from './pages/SearchNews';
import PopularNews from './pages/PopularNews';
import Events from './pages/Events';


const App = () => {

  return (

    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search-news" element={<SearchNews />} />
        <Route path="/popular-news" element={<PopularNews />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/events" element={<Events />} />

      </Routes>
    </>
  )
}


export default App;
