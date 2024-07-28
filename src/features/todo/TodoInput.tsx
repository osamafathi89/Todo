import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleText=(e:any)=>{
    setText(e.target.value)
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(text))
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text"  onChange={handleText}/>
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoInput;
