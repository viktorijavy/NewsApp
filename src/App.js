
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Weather from './pages/Weather';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchNews from './pages/SearchNews';
import PopularNews from './pages/PopularNews';

const App = () => {

  return (

    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/searchNews" element={<SearchNews/>}/>
        <Route path="/popularNews" element={<PopularNews/>}/>
        <Route path="/weather" element={<Weather/>}/>

      </Routes>
    </>
  )
}


export default App;
