import React, { useContext } from "react";
import { context } from "../ContextFun";
import checkIcon from "../../images/check.png"

//styles
import "./todolist.css";
let check =
  "https://cdn-icons-png.flaticon.com/128/5610/5610944.png";
let uncheck = "https://cdn-icons-png.flaticon.com/128/3388/3388701.png";

function ToDoList() {
  const { todos, setTodos, options, setOptions } = useContext(context);

  const handleCheck = (i) => {
    let mapped = todos.map((item, index) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(mapped);
  };

  const handleUncheck = (i) => {
    let filter = todos.filter((item, index) => index !== i);
    setTodos(filter);
  };

  let filteredOne = (item) =>
    (options === "completed" && item.isCompleted === true) ||
    (options.includes("uncompleted") && item.isCompleted === false) ||
    (options.includes("all") && item);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.filter(filteredOne).map((item, i) => (
          <li>
            <span className={item.isCompleted && "done"}>{item.value}</span>
            <div className="buttons">
              <button onClick={() => handleCheck(i)}>
                <img src={checkIcon} alt="" />
              </button>
              <button onClick={() => handleUncheck(i)}>
                <img src={uncheck} alt="" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
