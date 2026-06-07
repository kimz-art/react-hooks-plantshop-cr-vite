import React from "react";

function PlantCard({ plant, onStockToggle }) {
  const { id, name, image, price } = plant;
  const inStock = plant.inStock === undefined ? true : plant.inStock; 

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => onStockToggle(id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onStockToggle(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
