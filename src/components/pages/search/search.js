import React from 'react';
import './search.css';
import Searchbar from './searchbar/searchbar';

function Search () {
    return (
        <div>
            <Searchbar />
            <div className="searchbox">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Search;