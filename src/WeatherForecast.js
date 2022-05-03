import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "fc4cce9256dbfa5057522b9ccaf07872";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="col">
        <div className="WeatherForecast-day">Thur</div>
        <WeatherIcon code="01d" size={30} />
        <div className="WeatherForecast-temps">
          <span className="WeatherForecast-temp-max">19°</span>
          <span className="WeatherForecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}
