import React, { useState, useEffect } from 'react';
//For fetching json server as a backup
function PlantSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [plants, setPlants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file when the component mounts
    fetch('http://localhost:4000/plants')
      .then(response => response.json())
      .then(data => {
        setPlants(data);
        setSearchResults(data); // Initialize search results with all data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    // Filter plants based on the search term
    const filteredPlants = plants.filter(plant =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPlants);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search plants by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map(plant => (
          <div key={plant.id}>
            <h2>{plant.name}</h2>
            <p>{plant.email}</p>
            <p>{plant.blog}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantSearch;
