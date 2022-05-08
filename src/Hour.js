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
    let utc = Math.round(Date.now() / 1000);
    // current UTC time (seconds)
    console.log(utc);
    let utcHours = props.data.dt;
    console.log(utcHours);
    let uctHourDifference = (utcHours - utc) / 3600;
    // future UTC time (seconds)
    let hours = Math.round(uctHourDifference);
    console.log(hours);

    //   return futureHours[hours];
  }

  function timezoneHours() {
    let currentUtcTime = new Date();
    let currentUtcHours = currentUtcTime.getUTCHours();
    let timezone = props.timezoneData / 3600;
    console.log(timezone);

    let currentTime = currentUtcHours + timezone;
    if (currentTime <= 0) {
      currentTime = currentTime + 24;
    }

    let adjustedCurrentTime = currentTime;
    if (adjustedCurrentTime > 12) {
      adjustedCurrentTime = adjustedCurrentTime - 12;
      //pm
    } else {
      adjustedCurrentTime = `${adjustedCurrentTime}`;
      //am
    }
    return <div>{adjustedCurrentTime}</div>;
  }

  // get current local time
  // add hours based on {hours}
  // display am & pm on 12 hour system

  return (
    <div className="WeatherHour">
      <div className="WeatherHour">
        {hour()} {timezoneHours()}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={20} />
      <div className="WeatherHour-temps">
        <span className="WeatherHour-temp-max">{hourlyTemp()}°</span>
      </div>
    </div>
  );
}
