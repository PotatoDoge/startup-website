import React, {useState} from 'react';
import './Navbar.css';
import {IoIosCloseCircleOutline} from "react-icons/io";
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className={`navbar-menu-container ${menuOpen ? 'open' : ''}`}>
                <button className="navbar-close" onClick={toggleMenu}>
                    <IoIosCloseCircleOutline size="lg"/>
                </button>
                <ul className="navbar-menu">
                    <Link to="/">Home</Link>
                    <a href='#explore-menu'>About Us</a>
                    <Link to="/services">Services</Link>
                    <a href='#footer'>Projects</a>
                    <a href='#footer'>Blog</a>
                    <a href='#footer'>Contact Us</a>
                </ul>
            </div>
            <div className={`navbar-burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
        </div>
    );
};

export default Navbar;
