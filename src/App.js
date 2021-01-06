import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Cards from "./Components/Cards";
import Recipe from "./Components/Recipe";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Search />
      <Recipe />
      <Cards />
    </div>
  );
}

export default App;
