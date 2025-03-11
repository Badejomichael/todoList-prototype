import './App.css';
import {useState} from 'react'
import { Task } from './task';
import Intro from './intro'
import todoListImage from './assets/todo-list-logo.jpg'

function App() {
  /*let [age, setAge] = useState(0)

  const increaseAge = () => {
    setAge(age + 1)
  }

  const decreaseAge = () => 
    age > 0 ? setAge(age - 1) : setAge(age)
  }

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const [showText, setShowText] = useState(true);

  const handleTextVisibility = () => {
    setShowText(!showText)
  }


  const [textColor, setTextColor] = useState("black") 
  
  const changeTextColor = () => {
    setTextColor(textColor === "black" ? "red" : "black")
  }



  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }
  const setToZero = () => {
    setCount(0)
  }*/

  
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const newTaskUpperCase = newTask.replace(/\b\w/g, match => match.toUpperCase())
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTaskUpperCase,
      complete: "Complete"
    }

    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }
   
  const completed = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return {...task, complete: "Task Completed"}
      } else {
        return task; 
      }
    }));
  }

  const [showIntro, setShowIntro] = useState(true)

  const todoListPage = setShowIntro(false)

  const showTodoListPage = () => {
    return(
      <div>
        <div className="header container">
          <h1>Hello Michael, welcome back!</h1>
        </div>

        <div className="sub-header container">
          <h2>To Do List</h2>
        <img src={todoListImage} alt="" className="todo-list-logo"></img>
        </div>

    

        <div className="addTask">
          <input className="task-input" onChange={handleChange}/>
          <button className=" btn btn-dark" onClick={addTask}>Add Task</button>
        </div>

        <div className="list">
          {todoList.map((task, key) => {
            return <Task taskName={task.taskName} id ={task.id} deleteTask={deleteTask} complete={task.complete} completed={completed} key={key}/>
          })}
        </div>
      </div>
    )
  }

  
  

  return (
    <div className="App container app-container">
      
      <Intro todoListPage = {todoListPage}/>

      {showIntro && (showTodoListPage)}

      

      
    </div>




    /*<div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>

      <input type="text" onChange={handleInputChange}/>
      {inputValue}

      <button onClick={handleTextVisibility}>Show/Hide</button>
      {showText === true && <h1>My name is Michael</h1>}

      <button onClick={changeTextColor}>Change Color</button>
      <h1 style={{color: textColor}}>My name is Michael</h1>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {count}
    </div>*/
  );
}

export default App;
