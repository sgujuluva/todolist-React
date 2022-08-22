import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import ToDoList from "../todolist";
//styles
import "./forms.css";
function Forms({input, setInput, todos, setTodos }) {
  const handleChange = (e) => {   
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, 
      {text:input, completed:false, }
    ])
    setInput("") //restets the input
  }
  return (
    <div className="form-style">
      <form>
        <input onChange={handleChange} value={input} type="text" placeholder="Enter a task" />
        <button onClick={handleClick}  type="submit">Add</button>
        <div className="select">
          <select name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Forms;
