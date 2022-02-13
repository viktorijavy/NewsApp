 import React from 'react';
 import axios from 'axios';
 import { useState, useEffect } from 'react';
 
 
 const PopularNews = () =>  {

   const API_KEY = process.env.REACT_APP_API_KEY

   const [ articles, setArticles ] = useState([])
  
   
   useEffect(() => {
       axios.get(`https://newsapi.org/v2/top-headlines?country=lt&apiKey=${API_KEY}`)
       .then(response => {
           console.log(response)
           setArticles(response.data)
       })
       .catch(error => console.log(error))
   },[])

   return (


     <div>
     
     
    

    
     </div>
   )
 }
 
 export default PopularNews