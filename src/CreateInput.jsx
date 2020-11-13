import React, { useState } from "react";

const CreateInput = (props) => {
  const [todo, setTodo] = useState({
    name: "",
    age: "",
  });

  function handleChange(e) {
    let new_todo = { ...todo };
    new_todo[e.target.name] = e.target.value;
    setTodo(new_todo);
  }

  function handleClick() {
    props.addTodo(todo);
  }

  return (
    <div class="container">
      <div>     
        <div class="row">
          <h5 class="control-label col-sm-1">Name:</h5>
          <div class="col-sm-4">
            <input
              name="name"
              type="text"
              className="w-100 mb-3"
              value={todo.name}
              onChange={handleChange}
            />
          </div>

          <h5 class="control-label col-sm-1">Age:</h5>
          <div class="col-sm-4">
            <input
              name="age"
              type="text"
              className="w-100 mb-3"
              value={todo.age}
              onChange={handleChange}
            />
          </div>

          <div class="col-sm-2">
          <button className="btn btn-success w-100" onClick={handleClick}>Add</button>
          </div>
        </div>
        <div class="row">
          <h5 class="control-label col-sm-1">Search:</h5>
          <div class="col-sm-2"> 
            <input
              name="_id"
              type="text"
              className="w-100 mb-3"
            />
          </div>
          <div>
            <button className="btn btn-success" >Go</button>
          </div>
          <div>
            <button className="btn btn-warning w-100">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInput;
