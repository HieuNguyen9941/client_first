import React, { useState, useEffect } from "react";
import "./App.css";
import CreateInput from "./CreateInput";
import ListTodo from "./ListTodo";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api_url from './constan'

function App() {
  const [listTodo, setListTodo] = useState([]);

  function addTodo(todo) {
    axios({
      method: "post",
      url: `${api_url}/api/todo`,
      data: todo,
    }).then((res) => {
      let arr = [...listTodo];
      arr.push(res.data);
      setListTodo(arr);

      toast.success('🦄 Thêm thành công!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });
  }

  function delete_todo(id) {
    axios({
      method: "delete",
      url: `${api_url}/api/todo/?_id=${id}`,
    }).then((res) => {
      let arr = [...listTodo];
      let index = arr.findIndex((x) => x._id === id);
      arr.splice(index, 1);
      setListTodo(arr);

      toast.error('🦄 Xóa thành công', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `${api_url}/api/todo`,
    }).then((res) => {
      setListTodo(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>MY FORM</h1>
        <div className="row">
          <div className="col-sm">
            <CreateInput addTodo={addTodo} />
          </div>
        </div>
        <div>
        </div>
        <div className="col-sm">
            <ListTodo list={listTodo} delete_todo={delete_todo} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
