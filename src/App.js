// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Search from './components/Search';
// import ArticleCard from './components/ArticleCard';
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

      </Routes>
    </>
  )
}


export default App;
