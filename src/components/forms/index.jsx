import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { context } from "../ContextFun";
import React, { useContext } from "react";
import ToDoList from "../todolist";
//styles
import "./forms.css";
function Forms() {
  const { input, setInput, todos, setTodos } = useContext(context);
  console.log(input.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput({ value: "", isCompleted: false }); //setting to initial
  };
  console.log("todos", todos);
  return (
    <div className="form-style">
      <form onSubmit={handleSubmit}>
        <input
          required
          value={input.value}
          onChange={(e) => setInput({ value: e.target.value })}
          type="text"
          placeholder="Enter a task"
        />{" "}
        {/* // bcs its an obj using .value */}
        <button type="submit">Add</button>
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
