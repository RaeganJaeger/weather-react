import Container from "./Container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Container />
        <p className="footer">
          Opensource code by{" "}
          <a
            href="https://github.com/RaeganJaeger/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raegan Jaeger
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
