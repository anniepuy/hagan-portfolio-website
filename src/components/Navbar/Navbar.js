import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <div className='navbar-left'>
                <Link to="/" className="navbar-name">Ann Hagan</Link>
            </div> 
            <div className='navbar-center'>
                <ul className='navbar-links'>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="https://github.com/anniepuy"><FaGithub></FaGithub></a>
                <a href="https://www.linkedin.com/in/annmhagan/"><FaLinkedin></FaLinkedin></a>
            </div>  
        </nav> 
    );
};

export default Navbar;