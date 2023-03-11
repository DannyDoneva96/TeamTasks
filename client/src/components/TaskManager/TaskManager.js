import React, { useState, useEffect } from 'react'
import './TaskManager.css'
import Tasks from './Tasks/Tasks'
import TaskModal from './Modal/TaskModal'
import { DragDropContext } from "react-beautiful-dnd";
import { db } from '../../firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { nanoid } from '@reduxjs/toolkit';

const TaskManager = () => {

    const taskRef = collection(db, "tasksManager");

    const [show, setShow] = useState(false)

    const [tasks, setTasks] = useState([])

    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(taskRef);
            const tasks = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setTasks(tasks);
            setTodos(tasks.filter((task) =>
                task.status === 'To do'))

        }
       
        getTasks()

    }, []);

    const addTask = async (task) => {
        await addDoc(taskRef, task)
        setTodos([...todos, task]);
    }
   const updateTask= async (id, taskData) => {
        const taskDoc = doc(db, "tasksManager",id);
        const newData = taskData
        await updateDoc(taskDoc, newData)
    }

    const deleteTask = async (id) => {
        const taskDoc = doc(db, "tasksManager", id);
        await deleteDoc(taskDoc);
        // remove from the state
        
        setTodos(prevState => prevState.filter(emp => emp.id !== id));
           
    }
    return (
        <div>
            <div className="search-field-taskM">
                <input
                    className="INPUT-TASKmANAGER-SEARCH"
                    placeholder='Search Tasks'
                />
                <button onClick={() => setShow(true)} className="newTaskAdd">+ Add Task</button>
                <TaskModal onClose={() => setShow(false)} show={show} addTask={addTask} />
            </div>

            <div className="container-task-manager">
                <div className="column-tasks">
                    <h3>To Do</h3>
                    <div className="to-do">
                    {todos
                        ? todos.map((task) => {
                            return (
                                
                                    <Tasks onClose={() => setShow(false)} key={nanoid()}  updateTask={updateTask} deleteTask={deleteTask} task={task} />
                               
                            );
                        }) : <p>No Tasks found.</p>}
                    </div>
                </div>
                <div className="column-tasks">
                    <h3>In Progress</h3>
                    <div className="to-do"></div>
                </div>

                <div className="column-tasks">
                    <h3>In Review</h3>
                    <div className="to-do"></div>
                   
                </div>
                <div className="column-tasks">
                    <h3>Done</h3>
                    <div className="to-do"></div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager
