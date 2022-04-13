export default function Header() {
  return (
    <container>
      <div className="header">
        <h1 id="city-header">
          <span className="city" id="city">
            Minneapolis
          </span>
          , <span className="country" id="country"></span>
        </h1>
        <div className="today-date" id="today-date">
          Sunday, March 27, 2022 | 19:33
        </div>
        <div className="row today">
          <div className="col-4">
            <img
              src="https://i.pinimg.com/474x/84/a1/6a/84a16af6971e5c4234fa132c06b14969.jpg"
              id="main-icon"
              className="main-icon"
              alt="img of sun"
            />
          </div>
          <div className="col-6">
            <span className="today-temp" id="today-temp">
              55
            </span>{" "}
            °
            <span id="degreeUnit" className="degreeUnit">
              F
            </span>
            <ul className="today-summary">
              <li>
                <a href="" id="fahrenheit-link" className="active">
                  F
                </a>{" "}
                |{" "}
                <a href="" id="celsius-link">
                  C
                </a>
              </li>
              <li>
                <strong>Today:</strong>{" "}
                <span id="description">
                  Cloudy with a 20% chance of perception
                </span>
              </li>
              <li>
                <strong>Humidity:</strong> <span id="humidity">52</span>%
              </li>
              <li>
                <strong>Wind:</strong> <span id="wind">1</span> mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </container>
  );
}
