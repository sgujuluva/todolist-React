import React from "react";
//styles
import "./forms.css";
function Forms() {
  return (
    <div className="form-style">
    <form>
      <input type="text" placeholder="Enter a task" />
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
