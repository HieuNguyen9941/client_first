import React, { useState, useEffect } from "react";

const Tool = (pro) => {
  const [A, setA] = useState("Phú");

  const [name, setName] = useState("Khánh")

  function handleClick(e) {
    if (A == "Phú") setA("Khánh");
    else setA("Phú");
  }

  function handleChange(e){
      setName(e.target.value)
  }

  useEffect(()=>{
      console.log("load xog r nè");
  });

  return (
    <div>
      <div>tên là: {pro.ten}</div>
      <div>tuổi là: {pro.tuoi}</div>
      <div>lớp là: {pro.lop}</div>
      <div>tên tên: {A}</div>
      <button onClick={handleClick}>click clicks</button>
      <input value={name} onChange={handleChange}/>
      <div>{name}</div>
    </div>
  );
};

export default Tool;
