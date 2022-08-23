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
      <Forms />
      <ToDoList/>
      
    </div>
  );
}

export default App;
