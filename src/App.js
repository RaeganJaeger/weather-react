//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container />
      <p className="footer">
        <a href="https://github.com/RaeganJaeger/weather-react">
          Opensource code
        </a>{" "}
        by Raegan Jaeger
      </p>
    </div>
  );
}

export default App;
