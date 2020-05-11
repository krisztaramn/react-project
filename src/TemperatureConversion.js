import React, { useState } from "react";
import "./Main.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="temperature-icon">
          <span className="active">
            <button className="celsius">°C</button>
          </span>
          ||
          <button className="fahrenheit" onClick={showFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureConversion">
        <span className="current-temperature">{Math.round(fahrenheit())}</span>
        <span className="temperature-icon">
          <button className="celsius" onClick={showCelsius}>
            °C
          </button>
          ||
          <span className="active">
            <button className="fahrenheit">°F</button>
          </span>
        </span>
      </div>
    );
  }
}
