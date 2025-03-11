export const Task = (props) => {
  return (
    <div className=  {`task-container ${props.complete === "Task Completed" ? "completed" : ""}`} key = {props.key}>
      <p className="task">{props.taskName}</p> 
      <button className="complete-btn cb btn btn-dark" onClick={() => props.completed(props.id)}>{props.complete}</button>
      <button className="remove-btn btn btn-dark"  onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
}