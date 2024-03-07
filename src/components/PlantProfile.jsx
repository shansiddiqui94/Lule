import React from 'react';

const PlantProfile = ({ plant }) => {
  return (
    <div>
      <h2>{plant.name}</h2>
      <p>Scientific Name: {plant.scientificName}</p>
      <p>Location: {plant.location}</p>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.description}</p>
    </div>
  );
};

export default PlantProfile;
