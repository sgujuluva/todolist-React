import {useState} from "react"
//styles
import './App.css';
import Forms from './components/forms';
import ToDoList from './components/todolist';

function App() {
  const [input,setInput] = useState("");
  return (
    <div className="App">
      <Forms setInput={setInput}/>
      <ToDoList/>
    </div>
  );
}

export default App;
