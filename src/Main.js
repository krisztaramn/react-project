import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatDay from "./FormatDay";
import FormatTime from "./FormatTime";
import MainIcon from "./MainIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function Main(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span className="main-icon">
            <MainIcon code={props.data.icon} />
          </span>
        </div>
        <div className="col temperature-today">
          <TemperatureConversion celsius={props.data.temperature} />
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
