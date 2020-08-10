import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import Pokegame from "./components/Pokegame";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokegame />
    </div>
  );
}

export default App;
