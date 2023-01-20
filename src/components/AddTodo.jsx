import { useState } from "react";

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSetTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSetBody = (event) => {
    setBody(event.target.value);
  };

  const activeOnFullInput = ()=>{
    if(title.length > 0 && body.length > 0)
        return 'active';
    else
        return 'disabled';
  }


  const handleSubmit = (event)=>{
    addTodo(title, body);
    setTitle('');
    setBody('');
    event.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit} className="my-2 col-6 ">
      <input
        onChange={handleSetTitle}
        className="form-control my-2"
        value={title}
        placeholder="Todo title here..."
      />
      <textarea
        onChange={handleSetBody}
        className="form-control text my-2"
        value={body}
        placeholder="Todo body here..."
        type="text"
      />
      <button
        type="submit"
        className={"btn btn-outline-success " +activeOnFullInput()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
