import React, { useContext } from "react";
import { context } from "../ContextFun";

//styles
import "./todolist.css";
let check =
  "https://cdn-icons.flaticon.com/png/128/1634/premium/1634264.png?token=exp=1661256751~hmac=3e2a36fb98e070c1132101d60150916c";
let uncheck = "https://cdn-icons-png.flaticon.com/128/3388/3388701.png";

function ToDoList() {
  const { todos, setTodos } = useContext(context);

  const handleCheck = (i) => {
    
  };

  const handleUncheck = (i) => {
    let filter = todos.filter((item, index) => index !== i);
    setTodos(filter);
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((item, i) => (
          <li>
            <span>{item.value}</span>
            <div className="buttons">
              <button onClick={() => handleCheck(i)}>
                <img src={check} alt="" />
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
