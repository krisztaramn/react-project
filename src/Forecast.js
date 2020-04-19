import React from "react";
import "./Forecast.css";
import Temperature from "./Temperature";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <ul>
            <li>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color="white"
                size={40}
                animate={true}
              />
            </li>
            <li>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color="white"
                size={40}
                animate={true}
              />
            </li>
            <li>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color="white"
                size={40}
                animate={true}
              />
            </li>
            <li>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color="white"
                size={40}
                animate={true}
              />
            </li>
            <li>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color="white"
                size={40}
                animate={true}
              />
            </li>
          </ul>
        </div>
        <div className="col-5">
          <Temperature value="16" />
          <Temperature value="16" />
          <Temperature value="16" />
          <Temperature value="16" />
          <Temperature value="16" />
        </div>
        <div className="col">
          <p className="forcast-day"> Sunday </p>
          <p className="forcast-day"> Monday </p>
          <p className="forcast-day"> Tuesday </p>
          <p className="forcast-day"> Wednesday </p>
          <p className="forcast-day"> Thursday </p>
        </div>
      </div>
    </div>
  );
}
