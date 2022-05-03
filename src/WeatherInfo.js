import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city-header">
        <span className="city" id="city">
          {props.data.city}
        </span>
        <span className="country" id="country"></span>
      </h1>
      <div className="today-date" id="today-date">
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
              <strong>Today:</strong>{" "}
              <span id="description" className="text-capitalize">
                {props.data.description}
              </span>
            </li>
            <li>
              <strong>Humidity:</strong>{" "}
              <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              <strong>Wind:</strong> <span id="wind">{props.data.wind}</span>{" "}
              mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
