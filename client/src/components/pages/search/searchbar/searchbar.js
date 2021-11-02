import React from 'react';
import './searchbar.css';

function Searchbar () {
    return (
        <form /* action="/" method="get"  */className="searchbar">
            <input
                type="text"
                id="header-search"
                placeholder="Search Stories"
                name="s"
                className="search-input"
            />
            <button class="search-btn" type="submit">Search</button>
        </form>
    );
}

export default Searchbar;