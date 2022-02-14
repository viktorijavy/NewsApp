import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (

        <nav>
            <div className='nav-item' ><Link style={{textDecoration: "none"}} to={'/searchNews'}> Search News</Link> </div>
            <div className='nav-item'><Link style={{textDecoration: "none"}} to={'/popularNews'}> Popular News by country</Link></div>
            <div className='nav-item'><Link style={{textDecoration: "none"}} to={'/weather'}> Weather forecast</Link></div>
        </nav>

    )

}

export default Navbar