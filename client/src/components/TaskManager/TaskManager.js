import React,{useState} from 'react'
import './TaskManager.css'
import Tasks from './Tasks/Tasks'
import TaskModal from './Modal/TaskModal'
import { DragDropContext } from "react-beautiful-dnd";
import { db } from '../../firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const TaskManager = () => {

    const taskRef = collection(db, "tasksManager");

    const [show, setShow] = useState(false)
    const [tasks, setTasks] = useState([])

    const addTask = async (task) => {
        await addDoc(taskRef, task)
        setTasks([...tasks, task]);
    }
    return (
        <div>
            <div className="search-field-taskM">
                <input
                    className="INPUT-TASKmANAGER-SEARCH"
                    placeholder='Search Tasks'
                />
                <button onClick={() => setShow(true)}  className="newTaskAdd">+ Add Task</button>
                <TaskModal onClose={() => setShow(false)} show={show} addTask={addTask}/>
            </div>

            <div className="container-task-manager">
                <div className="column-tasks">
                    <h3>To Do</h3>
                    <div className="to-do">
                        <Tasks/>
                        <Tasks/>
                        <Tasks/>
                        <Tasks/>
                        </div>
                </div>
                <div className="column-tasks">
                <h3>In Progress</h3>
                <div className="to-do"></div>
                <Tasks/>
                </div>
                
                <div className="column-tasks">
                <h3>In Review</h3>
                <div className="to-do"></div>
                <Tasks/>
                <Tasks/>
                </div>
                <div className="column-tasks">
                <h3>Done</h3>
                <div className="to-do"></div>
                <Tasks/>
                </div>
            </div>
        </div>
    )
}

export default TaskManager
