import React from "react";
import "./Main.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ReactAnimatedWeather
            icon={"CLEAR_DAY"}
            color="white"
            size={70}
            animate={true}
          />
        </div>
        <div className="col temperature-today">
          <span className="current-temperature">21 </span>
          <span className="temperature-icon">
            <button className="celsius" id="celsius">
              °C
            </button>
            ||
            <button className="fahrenheit" id="fahrenheit">
              °F
            </button>
          </span>
        </div>
        <div className="col">
          <button className="current-day" disabled>
            Saturday
          </button>
          <span className="description">
            <span id="description">Sunny</span> <em>at</em> 15:00
          </span>
        </div>
      </div>
    </div>
  );
}
