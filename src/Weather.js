import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import HourlyForecast from "./HourlyForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      timezone: response.data.timezone,
    });
    //console.log(response.data);
  }

  function search() {
    const apiKey = "fc4cce9256dbfa5057522b9ccaf07872";
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={handleCityChange}
          />{" "}
          <button type="submit" value="Search">
            Search
          </button>
        </form>

        <WeatherInfo data={weatherData} />
        <div className="hourly-grid">
          <HourlyForecast coordinates={weatherData.coordinates} />
        </div>
        <div className="forecast-grid">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
