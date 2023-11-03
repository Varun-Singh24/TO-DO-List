
import React from 'react';
import './CSS/Todoitems.css';
import check from './Assets/check.png';
import circle from './Assets/circle.png';
import delete_img from './Assets/delete-i.png';

const Todoitems = ({ no, display, text, setTodos }) => {

const deleteTodo =(no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
   data = data.filter((todo)=> todo.no!==no);
    setTodos(data) ;

}
  const toggle = (no) => {
    // Retrieve and update the specific todo item's state
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.map((item) => {
      if (item.no === no) {
        item.display = item.display === "" ? "line-through" : "";
      }
      return item;
    });
    setTodos(data);
  };

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={() => { toggle(no) }}>
        {display === "" ? (
          <img src={circle} alt="" style={{ width: '50px', height: '50px' }} />
        ) : (
          <img src={check} alt="" style={{ width: '50px', height: '50px' }} />
        )}
        <div className="todoitems-text"> {text}  </div>
      </div>
      <img className='cross-icon' onClick={() =>{deleteTodo(no)}} src={delete_img} alt="" style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Todoitems;
