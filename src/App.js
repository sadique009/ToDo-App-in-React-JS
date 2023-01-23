import React, { useState } from "react";
import ToDoList from "./ToDoList";
function App() {
  const [inputTodos, setInputTodos] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editTodo, setEditTodo] = useState(null);

  const changeHandler = (e) => {
    setInputTodos(e.target.value);
  };

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   setInputTodos(e.target.value);
  //   searchTodos();
  // };

  const addTodos = () => {
    if (!inputTodos) {
      alert("Please add a todo");
    } else if (inputTodos && !toggle) {
      setTodos(
        todos.map((elem) => {
          if (elem.id === editTodo) {
            return { ...elem, name: inputTodos };
          }
          return elem;
        })
      );
      setToggle(true);
      setInputTodos("");
      setEditTodo(null);
    } else {
      const newTodos = {
        id: new Date().getTime().toString(),
        name: inputTodos,
      };
      setTodos([...todos, newTodos]);
      setInputTodos("");
    }
    // setTodos((newTodos) => {
    //   return [...newTodos, inputTodos];
    // });
  };

  // editing the todos.
  // when the user clicks on the edit button:
  // 1. get the id and name of the todo which the user has clicked to edit.
  // 2. set the toggle state to change the submit button to edit button.
  // 3. now update the value of "setTodos" with the new updated value.
  // 4. now pass the current item id to new state variable for reference.

  const editTodos = (todo) => {
    const selectedTodo = todos.find((editable) => {
      return editable.id === todo;
    });
    console.log(selectedTodo);
    setToggle(false);
    setInputTodos(selectedTodo.name);
    setEditTodo(todo);
  };

  const deleteTodos = (indTodo) => {
    console.log("item deleted");
    // setItems((allItems) => {
    //   return allItems.filter((filtered, index) => {
    //     return index !== ind;
    //   });
    // });
    const filteredTodos = todos.filter((filteredItem) => {
      return indTodo !== filteredItem.id;
    });
    // setInputTodos(filteredTodos);
    setTodos(filteredTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  // const searchTodos = (ind) => {
  //   const searched = todos.filter((fil) => {
  //     return fil === ind;
  //   });
  //   setTodos(searched);
  // };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <div>
            <h1>ToDo List</h1>
            <br />
            <input
              type="text"
              value={inputTodos}
              placeholder="Add a todo..."
              onChange={changeHandler}
            />
            {toggle ? (
              <button onClick={addTodos}>+</button>
            ) : (
              <button onClick={addTodos}>edit</button>
            )}
          </div>

          <ol>
            {/* <li>{inputList}</li> */}
            {todos.map((item) => {
              // map method can take atmost 3 params.
              return (
                <ToDoList
                  key={item.id}
                  item={item}
                  editTodos={editTodos}
                  deleteTodos={deleteTodos}
                />
              );
            })}
          </ol>
          <button onClick={deleteAllTodos}>Delete All !</button>
        </div>
      </div>
    </>
  );
}

export default App;
