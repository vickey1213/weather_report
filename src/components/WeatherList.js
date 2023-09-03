import React from "react";
import CityCard from "./CityCard";
import "../App.css";

function WeatherList({ cities, onDelete, onRefresh }) {
  return (
    <div className="weather-list">
      {cities.map((city) => (
        <div className="city-card">
          <CityCard
            key={city.name}
            city={city}
            onDelete={onDelete}
            onRefresh={onRefresh}
          />
        </div>
      ))}
    </div>
  );
}

export default WeatherList;
