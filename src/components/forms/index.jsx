import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
//styles
import "./forms.css";
function Forms({ setInput }) {
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div className="form-style">
      <form>
        <input onChange={handleChange} type="text" placeholder="Enter a task" />
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
