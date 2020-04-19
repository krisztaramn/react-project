import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return <div className="Temperature">{props.value} °C</div>;
}
