import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Hour.css";

export default function Hour(props) {
  function hourlyTemp() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}`;
  }

  function timezoneHour() {
    let utc = Math.round(Date.now() / 1000);
    // current UTC time (seconds)
    // console.log(utc);
    let utcHours = props.data.dt;
    //console.log(utcHours);
    let uctHourDifference = (utcHours - utc) / 3600;
    // future UTC time (seconds)
    let hours = Math.floor(uctHourDifference);
    // console.log(hours);

    let currentUtcTime = new Date();
    let currentUtcHours = currentUtcTime.getUTCHours();
    let timezone = props.timezoneData / 3600;
    let meridianLabel = "";
    //console.log(timezone);

    let currentTime = currentUtcHours + timezone;
    if (currentTime < 0) {
      currentTime = currentTime + 24;
    }
    let adjustedCurrentTime = currentTime;

    if (adjustedCurrentTime === 0) {
      adjustedCurrentTime = 12;
    }
    if (adjustedCurrentTime > 12) {
      adjustedCurrentTime = adjustedCurrentTime - 12;
    }

    let futureHours = [
      "Now",
      adjustedCurrentTime + 1,
      adjustedCurrentTime + 2,
      adjustedCurrentTime + 3,
      adjustedCurrentTime + 4,
      adjustedCurrentTime + 5,
      adjustedCurrentTime + 6,
      adjustedCurrentTime + 7,
      adjustedCurrentTime + 8,
      adjustedCurrentTime + 9,
      adjustedCurrentTime + 10,
      adjustedCurrentTime + 11,
      adjustedCurrentTime + 12,
    ];
    return futureHours[hours] + `${meridianLabel}`;
  }

  //    if (futureHours < 12) {
  //      meridianLabel = "pm";
  //    } else {
  //      meridianLabel = "am";
  //    }

  // get current local time
  // add hours based on {hours}
  // display am & pm on 12 hour system

  return (
    <div className="WeatherHour">
      <div className="WeatherHour">{timezoneHour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={20} />
      <div className="WeatherHour-temps">
        <span className="WeatherHour-temp-max">{hourlyTemp()}°</span>
      </div>
    </div>
  );
}
