import React from "react";
import "./style.css";
import{useState} from "react";
export default function App() {

const[todoList, setTodoList] = useState([]);
const[newTask, setNewTask] = useState("");
const handleChange=(e)=>{
  setNewTask(e.target.value)
}
const addTask =()=>{

setTodoList([...todoList, newTask])
}

const deleteTask=(taskName)=>{
 const newTodoList = todoList.filter((task)=>{
return task!== taskName
  });
setTodoList(newTodoList);
}
  return (
    <div>
      <h4>Todo List</h4>
      <input className="input" type="text" onChange={handleChange}placeholder="enter a task"></input>
      <button className="btn" onClick={addTask}>add</button>
<div className="list">
{todoList.map((task)=>{
  return(
  <div>
  <h3>{task}</h3>
  <button className="deleteBtn" onClick={()=>deleteTask(task)}>delete</button>

  </div>
  );
})}



</div>
    </div>
  );
}
