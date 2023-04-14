import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import TodoListContent from "./components/TodolistContent/TodolistContent";

function App() {
  const [showButton, setShowButton] = useState(true);
  return (
    <div className="App">
      <Heading showButton={showButton} setShowButton={setShowButton} />
      <TodoListContent showButton={showButton} setShowButton={setShowButton} />
    </div>
  );
}

export default App;
