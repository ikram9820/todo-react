import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

let todolist = [
  { id: 1, title: "todo title1", body: "todo body" },
  { id: 2, title: "my title2", body: "todo body" },
  { id: 3, title: "title3", body: "todo body" },
  { id: 4, title: "todo title4", body: "todo body" },
  { id: 5, title: "your title5", body: "todo body" },
  { id: 6, title: "ok title6", body: "todo body" },
];

function App() {
  const [todos, setTodos] = useState(todolist);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (title, body) => {
    const todo = { id: todos.length + 1, title, body };
    todolist = [...todolist, todo];
    setTodos(todolist);
  };

  const handleDelete = (id) => {
    todolist = todolist.filter((item) => item.id !== id);
    setTodos(todolist);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const searchList = (searchTerm) => {
    const list = todos.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return list;
  };

  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} />
      <hr />
      <AddTodo addTodo={handleAddTodo} />
      <hr />
      {searchTerm
        ? searchList(searchTerm).map((todo) => (
            <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
          ))
        : todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
    </div>
  );
}

export default App;
