import React from "react";
import "../App.css";

function CityCard({ city, onDelete, onRefresh }) {
  if (!city.main) {
    return <div>Loading...</div>;
  }

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>Temperature: {city.main.temp}</p>
      <button onClick={() => onDelete(city)}>Delete</button>
      <button onClick={() => onRefresh(city)}>Refresh</button>
    </div>
  );
}

export default CityCard;
