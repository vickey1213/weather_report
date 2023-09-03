import React, { useState, useEffect } from "react";
import WeatherList from "./WeatherList";
import "../App.css";

function WeatherDashboard() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("Fahrenheit");

  const fetchWeather = async (cityName, unit) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed360d44aa2d04642e12a0f6b9baec18&units=${unit}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  const addCity = async () => {
    const weatherData = await fetchWeather(search, temperatureUnit);
    if (weatherData) {
      setCities([...cities, weatherData]);
      setSearch("");
    }
  };

  const deleteCity = (cityToDelete) => {
    setCities(cities.filter((city) => city.name !== cityToDelete.name));
  };

  const refreshCity = async (cityToRefresh) => {
    const refreshedData = await fetchWeather(
      cityToRefresh.name,
      temperatureUnit
    );
    if (refreshedData) {
      setCities(
        cities.map((city) =>
          city.name === refreshedData.name ? refreshedData : city
        )
      );
    }
  };

  return (
    <div className="weather-dashboard">
      <h1 className="header">Weather Dashboard</h1>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Enter city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="add-button" onClick={addCity}>
          Add City ({temperatureUnit})
        </button>
      </div>

      <WeatherList
        cities={cities}
        onDelete={deleteCity}
        onRefresh={refreshCity}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
}

export default WeatherDashboard;
