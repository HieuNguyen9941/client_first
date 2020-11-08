import React from "react";
import Todo from "./Todo";

const ListTodo = (props) => {
  function handleClick(id) {
    props.delete_todo(id)
  }
  return (
    <div>
      {props.list.map((todo, index) => (
        <Todo index={index} todo={todo} handleClick={handleClick}/>
      ))}
    </div>
  );
};

export default ListTodo;
