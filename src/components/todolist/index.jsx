import React from 'react'
import Todo from "../Todo"
//styles
import "./todolist.css"
function ToDoList({todos , setTodos}) {
  return (
    <div className="todo-container">
    <ul className="todo-list">
    {todos.map((item,i) => <Todo text={item.text}/>)}
    </ul>
    
    </div>
  )
}

export default ToDoList