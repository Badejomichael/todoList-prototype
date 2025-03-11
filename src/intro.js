import todoListImage from './assets/todo-list-logo.jpg'
function Intro(props) {
  return (
    <div className={`container intro-page ${props.showTask ? "completed" : ""}`}>
      <div className="row">
        <div className="hero-section container">
          <h1>To Do List App</h1>
          <img src={todoListImage} alt="" className="todo-list-logo"></img>
        </div>
        <h1>Hey there! What's your name?</h1>
        <input className="name-input" placeholder="enter name" onChange={props.getUserInput}/>
        <button className=" btn btn-dark" onClick={() => {
          props.removeShowIntro();
          props.displayUserName();
          props.todoListPage();
        }}>Next</button>
      </div>
    </div>
  )
}

export default Intro;