import {useState} from "react"
//styles
import './App.css';
import Forms from './components/forms';
import ToDoList from './components/todolist';

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <Forms setInput={setInput}/>
      <ToDoList setTodos={setTodos}/>
    </div>
  );
}

export default App;
