import React, { useState } from "react";
import "./Main.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormatDay from "./FormatDay";
import FormatTime from "./FormatTime";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
            <span className="current-temperature">
              {Math.round(weatherData.temperature)}
            </span>
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
              <FormatDay date={weatherData.date} />
            </button>
            <span className="description">
              <span className="text-capitalize">{weatherData.description}</span>{" "}
              <em>at</em> <FormatTime date={weatherData.date} />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "54b592f18fb16ddcfb4b8e4b9be5924f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
