import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <section>
        <Search defaultCity="Bucharest" />
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
