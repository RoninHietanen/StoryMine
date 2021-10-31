import React from 'react';
import './homepage.css';
import welcome from '../../assets/images/welcome.png';

function Homepage () {
    return (
        <div>
            <img className="welcome" alt="Welcome to StoryMine" src={welcome} />
            
            <div className="card">
                <div className="card-text">
                    <p>A place where you can share and create with others</p>
                    <button className="signin-btn">Sign In</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;