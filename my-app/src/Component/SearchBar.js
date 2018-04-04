import React from 'react';

function SearchBar(props) {
        return (
                <input 
                    className="search"
                    onChange={props.onChange}
                    value={props.text} 
                    placeholder="Search"
                />
        );
}

export default SearchBar;



              
