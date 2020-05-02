import React from "react";
import "./Main.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatDay from "./FormatDay";
import FormatTime from "./FormatTime";

export default function Main(props) {
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
            {Math.round(props.data.temperature)}
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
            <FormatDay date={props.data.date} />
          </button>
          <span className="description">
            <span className="text-capitalize">{props.data.description}</span>{" "}
            <em>at</em> <FormatTime date={props.data.date} />
          </span>
        </div>
      </div>
    </div>
  );
}
