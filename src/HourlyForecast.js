import React, { useState, useEffect } from "react";
import axios from "axios";
import Hour from "./Hour";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  //if the variable inside the bracket changes, it triggers the code above

  function handleResponse(response) {
    //console.log(response.data);
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }

  function load() {
    let apiKey = "fc4cce9256dbfa5057522b9ccaf07872";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    //console.log(forecast);
    return (
      <div className="HourlyForecast">
        <div className="row">
          {hourlyForecast.map(function (hourlyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <Hour data={hourlyForecast} timezoneData={props.timezone} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
