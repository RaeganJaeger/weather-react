//import axios from "axios";
import Container from "./Container";

import "./App.css";
//import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Container />
        <p className="footer">
          <a
            href="https://github.com/RaeganJaeger/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Opensource code
          </a>{" "}
          by Raegan Jaeger
        </p>
      </div>
    </div>
  );
}

export default App;
