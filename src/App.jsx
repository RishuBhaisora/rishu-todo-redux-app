import React from "react";

import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <h1 className="border text-2xl font-black p-2">XTodo</h1>
      <h1 className=" text-4xl font-black p-2">Things To Get Done</h1>

      <ToDoList></ToDoList>
    </>
  );
}

export default App;
