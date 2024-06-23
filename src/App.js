import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="fs-6 fst-italic">
          This project was coded by {""}{" "}
          <a
            href="https://mywebdevjourney.netlify.app/about"
            target="_blank"
            rel="noreferrer"
          >
            Yevheniia Kovzikova
          </a>{" "}
          and is
          {""}{" "}
          <a
            href="https://github.com/Mahaonn/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            and open-soursed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
