import React from 'react'
import './TaskManager.css'
import Tasks from './Tasks/Tasks'
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
                <div className="column-tasks">
                    <h3>To Do</h3>
                    <div className="to-do">
                        <Tasks/>
                        </div>
                </div>
                <div className="column-tasks">
                <h3>In Progress</h3>
                <div className="to-do-cont"></div>
                </div>
                <div className="column-tasks">
                <h3>In Review</h3>
                <div className="to-do-cont"></div>

                </div>
                <div className="column-tasks">
                <h3>Done</h3>
                <div className="to-do-cont"></div>

                </div>
            </div>
        </div>
    )
}

export default TaskManager
