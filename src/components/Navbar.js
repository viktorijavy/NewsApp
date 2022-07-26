import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images-and-videos/logo.png'

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
                    <li><Link style={{ textDecoration: "none" }} to={'/events'}>Events</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to={'/search-news'}> Search News</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to={'/popular-news'}> Trending News</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to={'/weather'}> Weather</Link></li>
                </ul>

                <div className="logo">
                <img src={logo} alt="" className="logo-img"/>
                <h1>NEWS</h1>
                </div>
               
            </div>
        </nav>

        

    )

}

export default Navbar