import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (

<div id="navbar"> 
  <ul> 
	<li> <Link to={'/searchNews'}> Search News</Link> </li> 
	<li> <Link to={'/popularNews'}> Popular News</Link></li> 
	<li> <Link to={'/weather'}> Weather forecast</Link></li> 
	
  </ul> 
</div> 
 
    
    )
    
}

export default Navbar