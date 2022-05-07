import React from "react";

export default function LocalTime(props) {
  let utc = new Date();
  let utcHours = utc.getUTCHours();
  let timezone = props.timezone / 3600;
  let minutes = props.date.getMinutes();
  let city = props.city;

  let currentTime = utcHours + timezone;
  if (currentTime <= 0) {
    currentTime = currentTime + 24;
  }

  let adjustedCurrentTime = currentTime;
  if (adjustedCurrentTime > 12) {
    adjustedCurrentTime = adjustedCurrentTime - 12 + `:${minutes}pm`;
    //pm
  } else {
    adjustedCurrentTime = `${adjustedCurrentTime}:${minutes}am`;
    //am
  }
  return (
    <div>
      <strong>{city} Time:</strong> {adjustedCurrentTime}
    </div>
  );
}
