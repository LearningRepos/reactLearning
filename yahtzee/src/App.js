import React, { Component } from "react";
import Game from "./components/Game";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
