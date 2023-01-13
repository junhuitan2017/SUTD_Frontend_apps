import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./style.scss";

function App() {
  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <h2>Please do them ASAP</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          ref={todoText}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;