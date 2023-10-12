import React from 'react';

function SearchBar() {
  const searchBarContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Centra verticalmente
    justifyContent: 'center', // Centra horizontalmente
  };

  return (
    <div style={searchBarContainerStyle} className="search-bar-container">
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

