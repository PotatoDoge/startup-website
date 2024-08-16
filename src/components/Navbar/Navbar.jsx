import React from 'react'
import './Navbar.css'

const Navbar = ({setShowLogin}) => {

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="#change">Logo goes here</a>
            </div>
            <ul className="navbar-menu">
                <a href="#home">Home</a>
                <a href='#explore-menu'>About Us</a>
                <a href='#footer'>Offer Us</a>
                <a href='#footer'>Price List</a>
                <a href='#footer'>Pricing</a>
                <a href='#footer'>Projects</a>
                <a href='#footer'>Blog</a>
                <a href='#footer'>Contact</a>
            </ul>
        </div>
    )
}

export default Navbar