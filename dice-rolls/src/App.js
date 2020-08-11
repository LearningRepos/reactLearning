import React from "react";
import "./App.css";
import Die from "./components/Die";
import DiceRoll from "./components/DiceRoll";

function App() {
  return (
    <div className="App">
      <h1>Rolling Dice</h1>
      <DiceRoll />
    </div>
  );
}

export default App;
