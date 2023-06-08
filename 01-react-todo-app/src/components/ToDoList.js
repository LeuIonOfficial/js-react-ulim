import React, { useState } from 'react';
import './ToDoList.css';
const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleFilterInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && inputValue.trim() !== '') {
      event.preventDefault();
      handleAddTodo()
    }
  };

  //   const handleEditTodo = (index) => {
  //     const newText = prompt('edit task');
  //     todos.map((item, i) => {
  //       if (i === index) {
  //         const [prev, newState] = useState('')
  //         newState(() => )
  //       }
  //     });
  //   };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title" id="card-title">
                Task List
              </span>
              <div className="row">
                <form id="task-form">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      placeholder="Add another task"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                    <label htmlFor="task">New Task</label>
                  </div>
                </form>
              </div>
              <input
                type="submit"
                value="Add Task"
                className="btn"
                id="add-task"
                onClick={handleAddTodo}
              />
            </div>
            <div className="card-action">
              <h5 id="task-title">Tasks</h5>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="filter"
                  id="filter"
                  placeholder="Filter task"
                  value={filterValue}
                  onChange={handleFilterInputChange}
                />
                <label htmlFor="filter">Filter Task</label>
              </div>
              <ul className="collection">
                {todos
                  .filter((item) => {
                    return item
                      .toLowerCase()
                      .includes(filterValue.toLowerCase());
                  })
                  .map((item, index) => {
                    return (
                      <li key={index} className="items">
                        <span>{item}</span>
                        <div className="btn-div">
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleDeleteTodo(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleDeleteTodo(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>
              <a
                className="clear-tasks btn black"
                href="#"
                onClick={() => setTodos([])}
              >
                Clear Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
