import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="Headers">
        <h1 className="Header">Todo List!</h1>
        <small>A Simple React Todo List App</small>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
