import React from 'react'
import Check from "../../images/check.png"
import UnCheck from "../../images/uncheck.png"
function Todo({text,todo,todos,setTodos}) {
    const handleDelete = () => {
setTodos(todos.filter(item => item.id !== todos.id))
    }
  return (
    <div className = "todo">
    <li className="todo-task">{text} </li>
 <button className="complete-btn"><img src={Check} alt="" /></button>
 <button onClick={handleDelete} className="delete-btn"><img src={UnCheck} alt="" /></button>
        </div>
  )
}

export default Todo