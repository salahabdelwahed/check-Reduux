import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slice/TodoSlice";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState({
    id: Math.random(),
    title: "",
    done: false
  });
  const dispatch = useDispatch();
  const handeladd=()=>{
    dispatch(addTodo(newTodo))
    setNewTodo({
        id: Math.random(),
        title: "",
        done: false
    })
  }
  return (
    <div>
      <input
        type="text" 
        value={newTodo.title}
        placeholder="add new task"
        name="title"
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <button type="submit" onClick={handeladd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
