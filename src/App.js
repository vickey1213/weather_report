import React from "react";
import "./App.css";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Advanced Weather Dashboard</h1>
      </header>
      <main>
        <WeatherDashboard />
      </main>
      <footer className="app-footer">
        <p>Copyright © 2023 Your Company Name</p>
      </footer>
    </div>
  );
}

export default App;
