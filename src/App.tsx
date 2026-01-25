import { useState } from "react";
import "./App.css";

function App() {
  const [title,setTitle] = useState("");
  const [todos,setTodos] = useState([
    {
    id: 1,
    title: "todo1",
    completed: false,
  },
  {
    id: 2,
    title: "todo2",
    completed: true,
  },
  {
    id: 3,
    title: "todo3",
    completed: false,
  },
  ]);

  const handleAddTodo = () => {
    setTodos([...todos,{
      id: todos.length + 1,
      title: title,
      completed: false,
    }]);
    setTitle("");
  }
  const handleToggleTodo = (id:number) => {
    
  }
  return(
    <>
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>
          {todo.title}
          <input type="checkbox" checked={todo.completed}
          onChange={()=> handleToggleTodo(todo.id)} />
          </div>;
      })}
      <input type="text" name="title" placeholder="Add a title"
      onChange={(e) => setTitle(e.target.value)}
      value={title}/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
    </>
  );
}
export default App;