import React, { useState } from 'react'

const SearchButton = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {onSearch(searchTerm); 
    };

    return (
        <div>
            <input 
            type="text"
            placeholder="Search plants..."
            value={searchTerm} onChange={handleInputChange} 
            />
        <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchButton;