import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Hour(props) {
  //Time
  //icon
  //max temp

  function hourlyTemp() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}`;
  }

  function hour() {
    let Utc = Math.round(Date.now() / 1000);
    // current UTC time (seconds)
    console.log(Utc);
    let utcHours = props.data.dt;
    console.log(utcHours);
    let uctHourDifference = (utcHours - Utc) / 3600;
    // future UTC time (seconds)
    let hours = Math.round(uctHourDifference);
    console.log(hours);
  }

  return (
    <div className="WeatherHour">
      <div className="WeatherHour">{hour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={20} />
      <div className="WeatherHour-temps">
        <span className="WeatherHour-temp-max">{hourlyTemp()}°</span>
      </div>
    </div>
  );
}
