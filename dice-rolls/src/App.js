import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <div className="App">
      <h1>Rolling Dice</h1>
      <Die dots={1} />
      <Die dots={6} />
    </div>
  );
}

export default App;
