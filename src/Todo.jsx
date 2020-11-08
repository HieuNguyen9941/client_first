import React from "react";

const Todo = (props) => {
  const { index, todo, handleClick } = props;

  return (
    <div key={index}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{todo._id}</td>
            <td>{todo.name}</td>
            <td>{todo.age}</td>
            <td>
            <button
              className="btn btn-danger ml-3"
              onClick={(e) => handleClick(todo._id)}
            >
              Delete
            </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
