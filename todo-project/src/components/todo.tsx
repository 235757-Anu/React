import './todo.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const handleEdit = (index: number) => {
    setEditIndex(index);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };
  const handleSave = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex as number] = newTask.trim();
      setTasks(updatedTasks);
      setEditIndex(null);
      setNewTask('');
    }
  };

  return (
    <div>
      <div className="top-bar">
        <div className="logout-icon"><Link to='/'>
          <i className="fas fa-sign-out-alt">Logout</i></Link>
        </div>
      </div>
      <main className="c">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="headings">To-Do List</h1>
          <div className="form-group">
            <input
              type="text"
              className="add"
              id="add"
              placeholder="Add new task"
              value={newTask}
              onChange={handleInputChange}
            />
            <button type="submit" id="todo" className="adds">Add</button>
          </div>
        </form>
        <div className="list" id="list">
          {tasks.map((task, index) => (
            <div className="items" key={index}>

              <label>{task}</label>
              <div className="symbol">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(index)} style={{ cursor: "pointer" }} />
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(index)} style={{ cursor: "pointer", marginLeft: "15px" }} />

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Todo