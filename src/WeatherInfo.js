import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city-header">
        <span className="city">{props.data.city}</span>
        <span className="country"></span>
      </h1>
      <div className="today-date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row today">
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={75} />
        </div>
        <div className="col-6">
          <WeatherTemperature fahrenheit={props.data.temp} />

          <ul className="today-summary">
            <li>
              <strong>Today:</strong> <span>{props.data.description}</span>
            </li>
            <li>
              <strong>Humidity:</strong> <span>{props.data.humidity}</span>%
            </li>
            <li>
              <strong>Wind:</strong> <span>{props.data.wind}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
