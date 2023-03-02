import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';


export const Todolist = () => {

const navigate = useNavigate();
const [todoList, setTodoList] = useState([]);
const [inputValue, setInputValue] = useState('');
const [editingIndex, setEditingIndex] = useState(-1);

const handleCheckboxChange=(index)=>
{
  const updatedList = [...todoList]; 
  if(updatedList[index].iChecked === false)
  {
    updatedList[index].iChecked = true
  }
  else
  {
    updatedList[index].iChecked = false
  }
  
  console.log(updatedList[index].iChecked)
  setTodoList(updatedList);

}


const logout =(event)=> {
  navigate('/');
}

const handleInput = (event) => {
  setInputValue(event.target.value);
};

const handleKeyDown = (event) => {
  if (event.keyCode === 13 && inputValue.trim() !== '') {
    if (editingIndex === -1) {
      let element = {values: inputValue, iChecked: false };
      setTodoList([...todoList, element]);
    } else {
      const updatedList = [...todoList];
      updatedList[editingIndex].values = inputValue;
      setTodoList(updatedList);
      setEditingIndex(-1);
    }
    setInputValue('');
  }
};

const handleRemove = (index) => {
  const updatedList = [...todoList];
  updatedList.splice(index, 1);
  setTodoList(updatedList);
};

const handleEdit = (index) => {
  setEditingIndex(index);
  setInputValue(todoList[index].values);
};

return (
  <body class="todo-body-style">
  
  <div class="todo-text-center">
    <button class="logout-button" onClick={logout}>Logout</button>
    <h1 className='todo-header1'> Todo List</h1>
    

    <input
    class="mytodo"
      type="text"
      placeholder="Input task name and then tap enter to add"
      value={inputValue}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
    />
    <hr class="bottom-line" />
    <ul>
      {todoList.map((item, index) => (
        <div id="tasks_list">
                  <li key={index}>
          <input type="checkbox" onClick={() => handleCheckboxChange(index)}/>
          {editingIndex === index? (
            <input
              type="text"
              value={inputValue}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span className={item.iChecked ? "isChecked" : ""} >{item.values}</span>
            
          )}

          <button class="edit-button"  onClick={() => handleEdit(index)}>Edit</button>
          <button class="delete-button" onClick={() => handleRemove(index)}>Remove</button>

        </li>

        </div>

      ))}
    </ul>
</div>

  
  </body>
);

}



