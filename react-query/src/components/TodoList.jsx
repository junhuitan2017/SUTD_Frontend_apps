import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todosApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");

    const queryClient = useQueryClient(); // Using the query client that we provide in index.js

    const {
        isLoading,
        isError,
        error,
        data: todos // Rename the cache data as todos
    } = useQuery("todos", getTodos); // Create a cache called "todos"

    // * Wrap api calls with useMutation
    // * Need to mutation the cached data to let React know
    const addTodoMutation = useMutation(addTodo, {
        // Update the cache when the post is successful
        onSuccess: () => {
            // Invalidate the todos cache, and trigger a refresh
            queryClient.invalidateQueries("todos");
        }
    });

    const handleSubmit = e => {
        e.preventDefault();

        // Calling the POST
        addTodoMutation.mutate({
            userId: 1,
            title: newTodo,
            completed: false
            // id will be auto-increment by json-server
        });
    };

    // ? Old code without react-query
    // const [currentTodos, setCurrentTodos] = useState({});

    // // fetch on first call
    // useEffect(() => {
    //     getTodos().then((response) => {
    //         console.log("🚀 ~ file: TodoList.jsx:15 ~ useEffect ~ output", response);
    //         setCurrentTodos(response);
    //     });
    // }, []);

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // dont want the form to reload the page
    //     if (newTodo) {
    //         addTodo({ userId: 1, title: newTodo, completed: false });
    //         // ! Added and never fetch again
    //         setNewTodo("");
    //     } else {
    //         console.log("No todo found");
    //     }
    // };

    const newItemSection = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>
    );

    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = JSON.stringify(todos);
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    );
};

export default TodoList;
