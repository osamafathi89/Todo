import React from "react";
import "./App.css";
import TodoList from "./features/todo/TodoList";
import TodoInput from "./features/todo/TodoInput";

function App() {
  return <>
  <TodoInput/>
  <TodoList/>
  </>;
}

export default App;
