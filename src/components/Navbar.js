import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (

        <div className="navbar">

            <nav>
                <ul>
                    <li> <Link to={'/searchNews'}> Search News</Link> </li>
                    <li> <Link to={'/popularNews'}> Popular News</Link></li>
                    <li> <Link to={'/weather'}> Weather forecast</Link></li>

                </ul>
            </nav>
        </div>


    )

}

export default Navbar