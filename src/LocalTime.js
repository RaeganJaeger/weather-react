import React from "react";

export default function LocalTime(props) {
  let utc = new Date();
  let utcHours = utc.getUTCHours();
  let timezone = props.timezone / 3600;
  let city = props.city;
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let meridianLabel = "";

  let currentTime = utcHours + timezone;
  if (currentTime < 0) {
    currentTime = currentTime + 24;
  }
  let adjustedCurrentTime = currentTime;

  if (adjustedCurrentTime < 12) {
    meridianLabel = "am";
  } else {
    meridianLabel = "pm";
  }
  if (adjustedCurrentTime === 0) {
    adjustedCurrentTime = 12;
  }
  if (adjustedCurrentTime > 12) {
    adjustedCurrentTime = adjustedCurrentTime - 12;
  }

  return (
    <div>
      <strong>{city} Time:</strong> {adjustedCurrentTime}:{minutes}{" "}
      {meridianLabel}
    </div>
  );
}
