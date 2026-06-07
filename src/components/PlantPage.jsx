import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  function handleStockToggle(id) {
    setPlants((prev) =>
      prev.map((plant) => {
        if (plant.id === id) {
          const currentStock = plant.inStock === undefined ? true : plant.inStock; 
          return { ...plant, inStock: !currentStock };
        }
        return plant;
      })
    );
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <PlantList plants={displayedPlants} onStockToggle={handleStockToggle} />
    </main>
  );
}

export default PlantPage;