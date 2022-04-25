import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: "https://i.pinimg.com/474x/84/a1/6a/84a16af6971e5c4234fa132c06b14969.jpg",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="header">
        <h1 id="city-header">
          <span className="city" id="city">
            {weatherData.city}
          </span>
          , <span className="country" id="country"></span>
        </h1>
        <div className="today-date" id="today-date">
          <FormattedDate date={weatherData.date} />
        </div>
        <div className="row today">
          <div className="col-4">
            <img
              src={weatherData.icon}
              id="main-icon"
              className="main-icon"
              alt={weatherData.description}
            />
          </div>
          <div className="col-6">
            <span className="today-temp" id="today-temp">
              {Math.round(weatherData.temp)}
            </span>{" "}
            °
            <span id="degreeUnit" className="degreeUnit">
              F
            </span>
            <ul className="today-summary">
              <li>
                <a
                  href="https://epic-colden-a184c0.netlify.app/"
                  id="fahrenheit-link"
                  className="active"
                >
                  F
                </a>{" "}
                |{" "}
                <a
                  href="https://epic-colden-a184c0.netlify.app/"
                  id="celsius-link"
                >
                  C
                </a>
              </li>
              <li>
                <strong>Today:</strong>{" "}
                <span id="description" className="text-capitalize">
                  {weatherData.description}
                </span>
              </li>
              <li>
                <strong>Humidity:</strong>{" "}
                <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                <strong>Wind:</strong> <span id="wind">{weatherData.wind}</span>{" "}
                mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fc4cce9256dbfa5057522b9ccaf07872";
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
