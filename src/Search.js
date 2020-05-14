import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Main from "./Main";
import Forecast from "./Forecast";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "54b592f18fb16ddcfb4b8e4b9be5924f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Enter location"
                  onChange={handleCitySearch}
                />
              </form>
              <h1>
                <strong>{weatherData.cityName}</strong>
              </h1>
            </div>
            <div className="col">
              <form>
                <button type="submit" className="btn btn-primary">
                  Current location
                </button>
              </form>
            </div>
          </div>
        </div>
        <Main data={weatherData} />
        <Forecast city={weatherData.cityName} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
