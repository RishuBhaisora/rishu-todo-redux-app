import React from "react";
import Button from "./Button";

const ListItems = (props) => {
  const change = () => {
    props.onClick(props.task);
  };
  const deleteTodo=()=>{
    props.onDelete(props.task);
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
        {/* <Button
          theme={"third"}
          onClick={deleteTodo}
          input={"Delete"}
        ></Button> */}
      </div>
    </>
  );
};

export default ListItems;
