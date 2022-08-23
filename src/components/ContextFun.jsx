import React, {useState, createContext} from 'react'

export const context = createContext();

function ContextFun({children}) {
    const [input,setInput] = useState({value:"" , isCompleted:false})
    const [todos, setTodos] = useState([])
  return (
    <context.Provider value= {{input,setInput,todos, setTodos}}>{children}</context.Provider>
  )
}

export default ContextFun