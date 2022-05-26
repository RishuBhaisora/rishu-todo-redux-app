import uuid from "react-uuid";
import { createStore } from "redux";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from "./Actions";

// const savedTodoList = JSON.parse(localStorage.getItem("toDoList")) || [];
// const savedDoneList = JSON.parse(localStorage.getItem("doneList")) || [];
const initialState = {
  todos: [{ id: uuid(), title: "Bring Milk", done: false }],
};

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED: {
      // const newTodoArray = currentState.todos.map((t) => {
      // if (t !== action.payload) {
        return {
          ...currentState,
          todos: [...currentState.todos, action.payload],
        };
    //   }return t;
    // });return {
    //   ...currentState,
    //   todos:  newTodoArray,
    // };
    }
    case TODO_MARKED_DONE: {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.title === action.payload) {
          return { ...t, done: true };
        }
        return t;
      });
      return { ...currentState, todos: newTodoArray };
    }
    case TODO_MARKED_UNDONE: {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.title === action.payload) {
          return { ...t, done: false };
        }
        return t;
      });
      return { ...currentState, todos: newTodoArray };
    }
    default: {
      return currentState;
    }
  }
};

const Store = createStore(reducer);
export default Store;
