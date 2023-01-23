import React from "react";

const ToDoList = ({ item, editTodos, deleteTodos }) => {
  return (
    <>
      <div className="todo_style">
        <span>{item.name}</span>
        <button onClick={() => deleteTodos(item.id)}>x</button>
        <button onClick={() => editTodos(item.id)}>edit</button>
        
      </div>
    </>
  );
};

export default ToDoList;
