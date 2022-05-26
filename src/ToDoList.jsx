import React from "react";
import Button from "./Button";
import ListItems from "./ListItems";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  todoSelector,
  doneSelector,
  
} from "./Selectors";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from "./Actions";

const ToDoList = () => {
  const dispatch = useDispatch();
  const selector = useSelector;

  const [showTodoCreateForm, updateTodoCreateForm] = React.useState(true);
  const [input, changeInput] = React.useState("");
  const toDoList = selector(todoSelector);
  const doneList = selector(doneSelector);

  const addToDo = (payLoad) => {
    dispatch({ type: TODO_ADDED, payload: payLoad });
  };
  const onDone = (payLoad) => {
    dispatch({ type: TODO_MARKED_DONE, payload: payLoad });
  };
  const onUndone = (payLoad) => {
    dispatch({ type: TODO_MARKED_UNDONE, payload: payLoad });
  };

  let done;
  let todo;
  doneList.map((t) => (done = t.title));
  toDoList.map((t) => (todo = t.title));

  const showToDo = () => {
    if (done !== input && todo !== input) {
      if (input) {
        addToDo({ id: uuid(), title: input, done: false });
        updateTodoCreateForm(!showTodoCreateForm);
      }
    }
  };

  const inputValue = (props) => {
    changeInput(props.target.value);
  };

  const list = () => {
    updateTodoCreateForm(!showTodoCreateForm);
  };

  return (
    <>
      <div className="space-y-5 p-3">
        <h1 className=" text-lg font-bold">
          Things To Do
          {toDoList.map((e) => (
            <ListItems
              key={uuid()}
              text="X"
              onClick={onDone}
              task={e.title}
            ></ListItems>
          ))}
        </h1>
        {showTodoCreateForm && (
          <Button onClick={list} theme="third" input="+ Add a todo"></Button>
        )}
        {!showTodoCreateForm && (
          <div className="flex flex-col m-4 px-4 py-1 border-2 max-w-screen-md space-y-4 rounded-md ">
            <div className="space-y-4">
              <h1 className="font-bold text-xl"> Create a todo</h1>

              <input
                value={input}
                placeholder="Write Things ToDo"
                onChange={inputValue}
                className="border-2 max-w-screen-md  p-2 rounded-md "
              ></input>
            </div>
            <div className="flex space-x-2 ">
              <Button onClick={showToDo} input="Save"></Button>
              <Button onClick={list} input="Cancel" theme="fourth"></Button>
            </div>{" "}
          </div>
        )}
        <h1 className="  text-lg font-bold">Things Done </h1>
        {doneList.map((e) => (
          <ListItems
            key={uuid()}
            onClick={onUndone}
            text="✓"
            task={e.title}
          ></ListItems>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
