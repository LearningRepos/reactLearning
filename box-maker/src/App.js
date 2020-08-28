import React from "react";
import "./App.css";
import Box from "./components/Box";
import NewBoxForm from "./components/NewBoxForm";

// <Box backgroundColor={"red"} width={100} height={100} />

function App() {
  return (
    <div className="App">
      <NewBoxForm />
    </div>
  );
}

export default App;
