import React from 'react'
import Check from "../../images/check.png"
import UnCheck from "../../images/uncheck.png"
function Todo() {
  return (
    <div className = "todo">
    <li className="todo-task">Heyy  </li>
 <button><img src={Check} alt="" /></button>
 <button><img src={UnCheck} alt="" /></button>
        </div>
  )
}

export default Todo