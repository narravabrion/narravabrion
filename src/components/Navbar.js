import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        
          <nav>
            <ul className="nav-ul">
                <li className="nav-ul-li">
                    <Link className="nav-ul-li-a" to='/'>Home</Link>
                </li>
                <li className="nav-ul-li">
                    <Link className="nav-ul-li-a" to="/projects">projects</Link>
                </li>
                <li className="nav-ul-li">
                    <a className="nav-ul-li-a" target={'blank'} href="https://codxbrion.hashnode.dev/">blog</a>
                </li>
                <li className="nav-ul-li">
                    <Link className="nav-ul-li-a" to="story">story</Link>
                </li>
                
            </ul>
        </nav>  
        </>
    )
}

export default Navbar
