import React from "react";
import Button from "./Button";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { TODO_DELETE } from "./Actions";

const ListItems = (props) => {
  const dispatch = useDispatch();
  const change = () => {
    props.onClick(props.task);
  };
  const todoDelete =()=>{
    dispatch({type:TODO_DELETE,payload:props.task})
  }

  return (
    <>
      <div className=" space-x-2 flex ">
        <Button
          theme={props.themeClass}
          onClick={change}
          input={props.text}
        ></Button>
        <h1 className="p-2 font-black text-xl">{props.task}</h1>
         <div className="pt-4">
          <AiFillDelete onClick={todoDelete}></AiFillDelete>
        </div>
      </div>
    </>
  );
};

export default ListItems;
