import React from 'react';
import './searchBar.css';

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <div className='imgs-left' >
            <i class='fab fa-instagram fa-4x'></i>
            <img src="https://buxton.com.au/static/img/instagram.svg" className="name-logo" alt="insta Logo" />
            </div>
            <div className='center-content'>
                <input type='text' placeholder=' &#x1F50D;search' />
            </div>
            <div className='imgs-right' >
                <i className="far fa-compass fa-2x icon"></i>
                <i className="far fa-heart fa-2x icon"></i>
                <i className="far fa-user fa-2x icon"></i>
            </div>
        </div>
    );
}


export default SearchBar;