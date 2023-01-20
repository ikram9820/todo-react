function Todo({ todo,onDelete }) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.body}</p>
        <div className="d-flex">
          <button onClick={()=>onDelete(todo.id)} className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
