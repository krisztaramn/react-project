import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import Temperature from "./Temperature";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ul>
              <li>
                <WeatherIcon code={forecast.list[7].weather[0].icon} />
              </li>
              <li>
                <WeatherIcon code={forecast.list[15].weather[0].icon} />
              </li>
              <li>
                <WeatherIcon code={forecast.list[23].weather[0].icon} />
              </li>
              <li>
                <WeatherIcon code={forecast.list[31].weather[0].icon} />
              </li>
              <li>
                <WeatherIcon code={forecast.list[39].weather[0].icon} />
              </li>
            </ul>
          </div>
          <div className="col-5">
            <Temperature value={Math.round(forecast.list[7].main.temp)} />
            <Temperature value={Math.round(forecast.list[15].main.temp)} />
            <Temperature value={Math.round(forecast.list[23].main.temp)} />
            <Temperature value={Math.round(forecast.list[31].main.temp)} />
            <Temperature value={Math.round(forecast.list[39].main.temp)} />
          </div>
          <div className="col">
            <p className="forcast-day">
              {days[new Date(forecast.list[7].dt * 1000).getDay()]} at{" "}
              {new Date(forecast.list[7].dt_txt).getHours()}:00
            </p>
            <p className="forcast-day">
              {" "}
              {days[new Date(forecast.list[15].dt * 1000).getDay()]} at{" "}
              {new Date(forecast.list[15].dt_txt).getHours()}:00{" "}
            </p>
            <p className="forcast-day">
              {" "}
              {days[new Date(forecast.list[23].dt * 1000).getDay()]} at{" "}
              {new Date(forecast.list[23].dt_txt).getHours()}:00{" "}
            </p>
            <p className="forcast-day">
              {" "}
              {days[new Date(forecast.list[31].dt * 1000).getDay()]} at{" "}
              {new Date(forecast.list[31].dt_txt).getHours()}:00{" "}
            </p>
            <p className="forcast-day">
              {" "}
              {days[new Date(forecast.list[39].dt * 1000).getDay()]} at{" "}
              {new Date(forecast.list[39].dt_txt).getHours()}:00{" "}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "54b592f18fb16ddcfb4b8e4b9be5924f";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(displayForecast);

    return null;
  }
}
