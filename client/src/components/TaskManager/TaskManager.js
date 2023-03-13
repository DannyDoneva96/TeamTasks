import React, { useState, useEffect } from 'react'
import './TaskManager.css'
import Tasks from './Tasks/Tasks'
import TaskModal from './Modal/TaskModal'
import { DragDropContext } from "react-beautiful-dnd";
import { db } from '../../firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, getDoc } from 'firebase/firestore'
import { nanoid } from '@reduxjs/toolkit';

const TaskManager = () => {
    const taskRef = collection(db, "tasksManager");

    const [show, setShow] = useState(false)
    const [tasks, setTasks] = useState([])
    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [inReview, setInReview] = useState([])
    const [done, setDone] = useState([])
    const empRef = collection(db, "employees");
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            const data = await getDocs(empRef);
            const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setEmployees(employees);
        }
        getEmployees()

    }, []);

    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(taskRef);
            const tasks = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setTasks(tasks);
            setTodos(tasks.filter((task) => task.status === 'To do'))
            setInProgress(tasks.filter((task) => task.status === 'inProgress'))
            setInReview(tasks.filter((task) => task.status === 'inReview'))
            setDone(tasks.filter((task) => task.status === 'Done'))
        }
        getTasks()
    }, [])

    const updateEmployee = async (employeeId) => {
        const employeeDoc = doc(db, "employees", employeeId);
        const employeeData = await getDoc(employeeDoc).then((doc) => doc.data());
      
        if (employeeData) {
          const newCompletedTasks = employeeData.completedTasks + 1;
          const newData = { completedTasks: newCompletedTasks };
          await updateDoc(employeeDoc, newData);
        }
      };

    const addTask = async (task) => {
        await addDoc(taskRef, task)
        setTasks((prevTodos => [...prevTodos, task]))
        setTodos(prevTodos => [...prevTodos, task])
    }

    const updateTask = async (id, taskData) => {
        const taskDoc = doc(db, "tasksManager", id);
        const newData = taskData;
        const task = tasks.find((t) => t.id === id);

        if (task) {
            if (task.status === "To do") {
                setTodos((prevState) =>
                    prevState.map((t) => (t.id === id ? { ...t, ...taskData } : t))
                );
            } else if (task.status === "inProgress") {
                setInProgress((prevState) => prevState.filter((t) => t.id !== id));
                setInReview((prevState) => [...prevState, task]);
            } else if (task.status === "inReview") {
                setInReview((prevState) => prevState.filter((t) => t.id !== id));
                setDone((prevState) => [...prevState, task]);
            }

            await updateDoc(taskDoc, newData);
        }
    };

    const updateStatus = async (id, status) => {
        const taskDoc = doc(db, "tasksManager", id);
        await updateDoc(taskDoc, { status: status });
    }

    const deleteTask = async (id) => {
        const taskDoc = doc(db, "tasksManager", id);
        await deleteDoc(taskDoc);

        // remove from the state
        setTasks(prevState => prevState.filter((t) => t.id !== id));
        setTodos(prevState => prevState.filter((t) => t.id !== id));
        setInProgress(prevState => prevState.filter((t) => t.id !== id));
        setInReview(prevState => prevState.filter((t) => t.id !== id));
        setDone(prevState => prevState.filter((t) => t.id !== id));
    }

    return (
        <div>
            <div className="search-field-taskM">
                <input
                    className="INPUT-TASKmANAGER-SEARCH"
                    placeholder='Search Tasks'
                />
                <button onClick={() => setShow(true)} className="newTaskAdd">+ Add Task</button>
                <TaskModal onClose={() => setShow(false)} employees={employees} show={show} addTask={addTask} />
            </div>

            <div className="container-task-manager">
                <div className="column-tasks">
                    <h3>To Do</h3>
                    <div className="to-do">
                        {todos
                            ? todos.map((task) => {
                                return (

                                    <Tasks employees={employees} onClose={() => setShow(false)} key={nanoid()} updateStatus={updateStatus} updateTask={updateTask} deleteTask={deleteTask} task={task} />

                                );
                            }) : null}
                    </div>
                </div>
                <div className="column-tasks">
                    <h3>In Progress</h3>
                    <div className="to-do">
                        {inProgress
                            ? inProgress.map((task) => {
                                return (

                                    <Tasks employees={employees} onClose={() => setShow(false)} updateStatus={updateStatus} key={nanoid()} updateTask={updateTask} deleteTask={deleteTask} task={task} />

                                );
                            }) : null}
                    </div>
                </div>

                <div className="column-tasks">
                    <h3>In Review</h3>
                    <div className="to-do">
                        {inReview
                            ? inReview.map((task) => {
                                return (

                                    <Tasks employees={employees} onClose={() => setShow(false)} updateStatus={updateStatus} key={nanoid()} updateTask={updateTask} deleteTask={deleteTask} task={task} />

                                );
                            }) : null}
                    </div>

                </div>
                <div className="column-tasks">
                    <h3>Done</h3>
                    <div className="to-do">
                        {tasks.filter((task) => task.status === "done").map((task) => {
                            return (
                                <Tasks
                                updateEmployee={updateEmployee}
                                employees={employees}
                                    setDone={setDone}
                                    onClose={() => setShow(false)}
                                    updateStatus={updateStatus}
                                    key={nanoid()}
                                    updateTask={updateTask}
                                    deleteTask={deleteTask}
                                    task={task}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager
