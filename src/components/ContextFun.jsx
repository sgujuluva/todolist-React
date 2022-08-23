import React, {useState, createContext} from 'react'

export const context = createContext();

function ContextFun({children}) {
    const [input,setInput] = useState({value:"" , isCompleted:false})
    const [todos, setTodos] = useState([])
    const [options,setOptions] = useState("all");
  return (
    <context.Provider value= {{input,setInput,todos, setTodos , options,setOptions}}>{children}</context.Provider>
  )
}

export default ContextFun