import React from 'react'
import './TaskManager.css'
import { DragDropContext } from "react-beautiful-dnd";

const TaskManager = () => {
  return (
    <div>
      <div className="search-field-taskM">
      <input
        className="INPUT-TASKmANAGER-SEARCH"
        placeholder='Search Tasks'
      />
      <button className="newTaskAdd">+ Add Task</button>
      </div>

      <div className="container-task-manager">

      </div>
    </div>
  )
}

export default TaskManager
