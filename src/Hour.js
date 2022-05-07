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
    let hour = props.data.dt;
    console.log(hour);
    //let utcHours = hour.getUTCHours();

    let hours = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    return hours[hour];
  }

  return (
    <div className="WeatherHour">
      <div className="WeatherHour">{hour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="WeatherHour-temps">
        <span className="WeatherHour-temp-max">{hourlyTemp()}°</span>
      </div>
    </div>
  );
}
