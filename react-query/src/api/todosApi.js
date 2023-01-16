import axios from "axios"; 
 
// CRUD methods with axios 
const todosApi = axios.create({ 
  baseURL: "http://localhost:9000", 
}); 
 
const delayPromise = (ms) => new Promise((res) => setTimeout(res, ms)); 
 
export const getTodos = async () => { 
  const response = await todosApi.get("/todos"); 
//   await delayPromise(5000); 
  return response.data; 
}; 
 
 
export const addTodo = async (todo) => { 
  return await todosApi.post("/todos", todo); 
}; 
 
export const updateTodo = async (todo) => { 
  return await todosApi.patch(`/todos/${todo.id}`, todo); 
}; 
 
export const deleteTodo = async (todo) => { 
  return await todosApi.delete(`/todos/${todo.id}`, todo); 
}; 
 
export default todosApi;