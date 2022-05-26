import { createStore } from "redux";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from "./Actions";

const currentSavedState =
  JSON.parse(localStorage.getItem("currentSavedState")) || [];

console.log(currentSavedState);
const initialState = {
  todos: currentSavedState.todos || [],
};

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED: {
      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({
          ...currentState,
          todos: [...currentState.todos, action.payload],
        })
      );
      return {
        ...currentState,
        todos: [...currentState.todos, action.payload],
      };
    }
    case TODO_MARKED_DONE: {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.title === action.payload) {
          return { ...t, done: true };
        }
        return t;
      });
      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({ ...currentState, todos: newTodoArray })
      );
      return { ...currentState, todos: newTodoArray };
    }
    case TODO_MARKED_UNDONE: {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.title === action.payload) {
          return { ...t, done: false };
        }
        return t;
      });
      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({ ...currentState, todos: newTodoArray })
      );
      return { ...currentState, todos: newTodoArray };
    }
    default: {
      return currentState;
    }
  }
};

const Store = createStore(reducer);
export default Store;
