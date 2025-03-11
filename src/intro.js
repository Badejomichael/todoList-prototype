function Intro(props) {
  return (
    <div className="container intro-page">
      <div className="row">
        <h1>Hey there! What's your name?</h1>
        <input className="name-input" placeholder="enter name"/>
        <button className=" btn btn-dark" onClick={props.todoListPage}>Next</button>
      </div>
    </div>
  )
}

export default Intro;