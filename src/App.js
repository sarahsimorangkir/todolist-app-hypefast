import React, { useState } from "react";
import "./App.css";
import TodoListContent from "./components/TodolistContent/TodolistContent";

function App() {
  const [showButton, setShowButton] = useState(true);
  return (
    <div className="App">
      <TodoListContent showButton={showButton} setShowButton={setShowButton} />
    </div>
  );
}

export default App;
