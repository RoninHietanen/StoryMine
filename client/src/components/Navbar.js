import React from 'react';
import './navbar.css';
import logo from './assets/images/logo.png';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Navbar () {
    if (Auth.loggedIn()) {
        return (
            <nav className="navbar">
                <div >
                    <img className="logo" alt="StoryMine Logo" src={logo} />
                </div>

                
                <div className="navbar-items">
                    <h1 className="navbar-item button"><Link to="/profile" className="text">Profile</Link></h1>
                    <h1 className="navbar-item button"><Link to="/search" className="text">Search</Link></h1>
                    <h1 className="navbar-item button"><a href="/" onClick={() => Auth.logout()} className="text">Logout</a></h1>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navbar">
                <div >
                    <img className="logo" alt="StoryMine Logo" src={logo} />
                </div>

            </nav>
        );
    }
}

export default Navbar;