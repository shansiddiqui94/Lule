import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.description}</p>
    </div>
  );
};

export default PlantCard;
