import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (

      

        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><Link style={{ textDecoration: "none" }} to={'/'}> Home</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to={'/searchNews'}> Search News</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to={'/popularNews'}> Trending News</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to={'/weather'}> Weather</Link></li>



                </ul>
                <h1 className="logo">VICTORIA</h1>
            </div>
        </nav>

        

    )

}

export default Navbar