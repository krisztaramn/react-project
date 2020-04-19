import React from "react";
import "./App.css";
import Search from "./Search";
import Main from "./Main";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <section>
        <Search />
        <Main />
        <Forecast />
      </section>
      <p className="open-source">
        <a
          href="https://github.com/krisztaramn/react-project"
          target=" "
          className="git-link"
        >
          Open-source cod
        </a>{" "}
        by Krisztina Ramn
      </p>
    </div>
  );
}

export default App;
