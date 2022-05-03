import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="today-temp">{Math.round(props.fahrenheit)}</span>{" "}
        <span className="degree-unit">
          °F |{" "}
          <a href="/" onClick={showCelsius} className="unit-link">
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="today-temp">{Math.round(celsius())}</span>{" "}
        <span className="degree-unit">
          <a href="/" onClick={showFahrenheit} className="unit-link">
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
