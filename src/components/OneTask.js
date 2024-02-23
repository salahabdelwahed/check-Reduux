import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/Slice/TodoSlice";

const OneTask = ({ todoItem }) => {
  const dispatch = useDispatch();
  const handelupdate = (todo) => {
    dispatch(updateTodo({ ...todo, isDone: !todo.isDone }));
  };
  const updateTodoTitle = (todo) => {
    dispatch(updateTodo({ ...todo, title: newtitle }));
    setshow(!show);
  };
  const [show, setshow] = useState(false);
  const [newtitle, setnewtitle] = useState("");
  return (
    <>
      <input
        type="checkbox"
        name="isDone"
        onClick={() => handelupdate(todoItem)}
      />
      {!show ? (
        <>
          <h4
            onDoubleClick={() => setshow(!show)}
            style={todoItem.isDone ? { textDecoration: "line-through" } : null}
          >
            {todoItem.title}
          </h4>
          <button onClick={() => dispatch(deleteTodo(todoItem.id))}>
            delete
          </button>
        </> 
         ) : (
        <>
          <input type="text" onChange={(e) => setnewtitle(e.target.value)} />
          <button onClick={() => updateTodoTitle(todoItem)}>update</button>
        </>
      )}
    </>
  );
};

export default OneTask;
