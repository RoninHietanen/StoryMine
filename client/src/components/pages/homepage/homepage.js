import React from 'react';
import './homepage.css';
import welcome from '../../assets/images/welcome.png';
import { Link } from "react-router-dom";

function Homepage () {
    return (
        <div>
            <img className="welcome" alt="Welcome to StoryMine" src={welcome} />
            
            <div className="card">
                <div className="card-text">
                    <p>A place where you can share and create with others</p>
                    <button className="signin-btn"><Link to="/signin">Sign In</Link></button>
                    <button className="signup-btn"><Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;