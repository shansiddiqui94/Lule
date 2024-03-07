import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchButton from "./components/SearchBar";

function App() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <h1>LULe</h1>
      <SearchButton onSearch={handleSearch} />
    </div>
  );
}

export default App;
