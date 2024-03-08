 import React, { useState, useEffect } from 'react';

// function PlantCard() {
//   const [plants, setPlants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchPlants();
//   }, [searchTerm]);

//   const fetchPlants = () => {
//     fetch("https://trefle.io/api/v1/plants?token=qPl3hMO73tNV3AVEfjU561h_wb9WdYBtZpHPbNiC820")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlants(data);
//       });
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchPlants();
//   };

//   return (
//     <div>
//       <h1>Featured Plants</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Search plants" value={searchTerm} onChange={handleSearch} />
//         <button type="submit">Search</button>
//       </form>
//       {plants.map((plant) => (
//         <div key={plant.id}>
//           <h2>{plant.name}</h2>
//           {/* Render other plant details here */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PlantCard;





function PlantCard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [plant, setPlant] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://trefle.io/api/v1/plants/search?token=xo00HVSYZtEFKcdBR266-F7zHjoHMn6bwloz049W530&q=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPlant(data.data[0].common_name);
        } else {
          setPlant('No plant found');
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search plant by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>{plant}</p>
    </div>
  );
}

export default PlantCard;