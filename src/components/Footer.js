import React from 'react';
import './footer.css';

function Navbar () {
    return (
        <nav className="footer">
            <div className="footer-items">
                <h3 className="footer-item">Made By: Ronin</h3>
                <h3 className="footer-item"><a  className="contact-styling" href="https://github.com/RoninHietanen">Github</a></h3>
                <h3 className="footer-item"><a  className="contact-styling" href="https://www.linkedin.com/in/ronin-hietanen-878a50211/">LinkedIn</a></h3>
            </div>
        </nav>
    );
}

export default Navbar;