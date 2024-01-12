import Todo from './Todo.js';
import TodoList from './TodoList.js';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleTodoSubmit = () => {
    const key = Math.floor(Math.random() * 10000);
    const keyStr = newTodo + "Ohhhhboii" + "uc" + "Ohhhhboii" + key.toString() + "Ohhhhboii" + "notmodifying";
    setTodos([...todos, keyStr]);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input onChange = {handleInputChange}/>
      <button onClick = {handleTodoSubmit}>Add</button>

      <div>
        <TodoList todos = {todos} modifyTodos = {setTodos}/>
      </div>
    </div>
  );
}

export default App;
