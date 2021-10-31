import React from 'react';
import './navbar.css';
import logo from './assets/images/logo.png';

function Navbar () {
    return (
        <nav className="navbar">
            <div >
                <img className="logo" alt="StoryMine Logo" src={logo} />
            </div>

            <div className="navbar-items">
                <h1 className="navbar-item button">Stories</h1>
                <h1 className="navbar-item button">Profile</h1>
                <h1 className="navbar-item button">Search</h1>
                <h1 className="navbar-item button">Logout</h1>
            </div>
        </nav>
    );
}

export default Navbar;