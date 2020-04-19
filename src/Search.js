import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <input
              className="search-bar"
              type="text"
              placeholder="Enter location"
              id="search-input"
            />
          </form>
          <h1>
            <strong>Bucharest</strong>
          </h1>
        </div>
        <div className="col">
          <form>
            <button
              type="submit"
              className="btn btn-primary"
              id="current-location"
            >
              Current location
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
