import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="today-temp">{Math.round(props.fahrenheit)}</span>{" "}
      <span className="degree-unit">°F</span>
    </div>
  );
}
