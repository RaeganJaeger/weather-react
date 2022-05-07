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
    let utc = props.data.dt;
    let utcHour = utc;
    console.log(utcHour);

    let utcHours = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
    ];
    return utcHours[utcHour];
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
