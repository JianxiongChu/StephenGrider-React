import Todo from './Todo.js'
import { useState } from 'react';

const TodoList = ({todos, modifyTodos}) => {
  console.log(todos)
  const [mode,setMode] = useState("All");

  const handleDelete = (event) => {
    modifyTodos(todos.filter((todo) => {
      return todo !== event.target.value;
    }))
  };

  const handleSelect = (event) => {
    let checked = event.target.id.split("Ohhhhboii")[1];

    if(checked === "uc"){
      checked = "c"
    }
    else{
      checked = "uc"
    }

    modifyTodos(todos.map((todo) => {
      if(todo === event.target.id){
        return event.target.id.split("Ohhhhboii")[0] + "Ohhhhboii" + checked + "Ohhhhboii" + event.target.id.split("Ohhhhboii")[2] + "Ohhhhboii" + event.target.id.split("Ohhhhboii")[3];
      }

      return todo;
    }));
  };

  const handleTodoChange = (event) => {
    modifyTodos(todos.map((todo) => {
      if(event.target.id === todo){
        return todo.split("Ohhhhboii")[0] + "Ohhhhboii" + todo.split("Ohhhhboii")[1] + "Ohhhhboii" + todo.split("Ohhhhboii")[2] + "Ohhhhboii" + "modifying";
      }
      else{
        return todo;
      }
    }));
  };

  const handleConfirmTodoChange = (event) => {
    console.log(event)
    modifyTodos(todos.map((todo) => {
      if(event.target.value === todo){
        return document.getElementById(todo + "modify").value + "Ohhhhboii" + todo.split("Ohhhhboii")[1] + "Ohhhhboii" + todo.split("Ohhhhboii")[2] + "Ohhhhboii" + "notmodifying";
      }
      else{
        return todo;
      }
    }))
  }

  let list = todos.map((todoKey) => {
    if(mode === "All" || (mode === "C" && todoKey.split("Ohhhhboii")[1] === "c") || (mode === "UC" && todoKey.split("Ohhhhboii")[1] === "uc")){
      if(todoKey.split("Ohhhhboii")[3] === "notmodifying"){
        return (
          <div key = {todoKey} >
            <input type ="checkbox" id = {todoKey} onChange = {handleSelect}/>
            <span onClick = {handleTodoChange} id = {todoKey}>{todoKey.split("Ohhhhboii")[0]}</span>
            <button onClick = {handleDelete} value = {todoKey}>Delete</button>
          </div>
        );
      }
      else{
        return (
          <div key = {todoKey} >
            <input type = "text" id = {todoKey + "modify"}></input>
            <button onClick = {handleConfirmTodoChange} value = {todoKey}>Confirm</button>
          </div>
        );
      }
    }
  });
  
  const handleChangeMode = () => {
    if(mode === "All"){
      setMode("C");
    }
    else if(mode === "C"){
      setMode("UC");
    }
    else{
      setMode("All");
    }
  };

  const handleDeleteSelected = () => {
    modifyTodos(todos.filter((todo) => {
      return todo.split("Ohhhhboii")[1] !== "c";
    }))
  };

  return (
    <div>
      <button onClick={handleChangeMode}>Toggle Display: {mode}</button>
      <button onClick={handleDeleteSelected}>Delete Checked Terms</button>
      {list}
    </div> 
  );
};

export default TodoList;