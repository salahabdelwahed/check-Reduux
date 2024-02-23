import React from "react";
import { useSelector } from "react-redux";
import OneTask from "./OneTask";

const HomePage = () => {
  const todos = useSelector((state) => state.todo.dataTodo);
  
  
  return (
    <div>
      {todos.map((todoItem) => (
        <div className="" key={todoItem.id}>
         <OneTask  todoItem={todoItem}/>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
