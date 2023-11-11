import { useState } from 'react';
import './CSS/Todo.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import Todoitems from './Todoitems';

let count = 0;
const Todo = () => {

  const [todos, setTodos] = useState([])
  const inputRef = useRef(null);
  const add = () => {
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }])
    inputRef.current.value = "";
    localStorage.getItem("todos-count", count)
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos-count");
  }, []) ;
  
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 1 );    // Here using 1 milli Seconds 
  }, [todos])

  return (
    <div className='todo'>
      <div className="todo-header"> To Do List </div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
        <div onClick={() => { add() }} className="todo-add-btn">ADD</div>

      </div>
      <div className="toto-list">
        {todos.map((item, index) => {
          return <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        })}
      </div>
    </div>
  )
}
export default Todo;
