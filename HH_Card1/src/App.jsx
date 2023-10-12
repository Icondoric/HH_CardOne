import React from "react";
import "./App.css";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-icon"></div>
      <input
        className="search-input"
        type="text"
        placeholder="Enter city or region"
      />
      <button className="search-button">
        <img className="img-button" src="./Filter.svg" alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
