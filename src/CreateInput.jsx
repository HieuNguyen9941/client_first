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
          <label class="control-label col-sm-0">Name:</label>
          <div class="col-sm-4">
            <input
              name="name"
              type="text"
              className="w-100 mb-3"
              value={todo.name}
              onChange={handleChange}
            />
          </div>

          <label class="control-label col-sm-0">Age:</label>
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
      </div>
    </div>
  );
};

export default CreateInput;
