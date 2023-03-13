import React from 'react'
import { useState } from 'react'
import './TaskModal.css'
const Modal = (props) => {


    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'To do',
        assignee: '',
        dueDate: '',

    });
    const onSubmit = (e) => {
        props.addTask(task)
        props.onClose()
    }

    const onChange = (e) => {
        setTask(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div style={props.show ? { display: 'block' } : { display: 'none' }} className="modal modalNone" onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>

                <div className="modal-header">
                    <h4 className="modal-title"> Add new Task</h4>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="title" name="title" onChange={onChange} value={task.title}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" onChange={onChange} value={task.description}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="assignee">Assignee</label>
                        <select name="assignee" onChange={onChange} value={task.assignee}>
                            <option value="">-- select assignee --</option>
                            {props.employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                    {employee.fullName}
                                </option>
                            ))}
                        </select>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="dueDate">Due Date</label>
                        <input type="text" name="dueDate" onChange={onChange} value={task.dueDate}></input>
                        <span className="bar"></span>

                    </div>


                </div>
                <div className="bnbuttons ">
                    <div className="modal-footer">
                        <button type="submit" onClick={onSubmit} className="modal-button">SEND</button>
                        <button onClick={props.onClose} type="button" className="modal-button">CLOSE</button>
                    </div>
                </div>

            </div>
        </div>
    )
}



export default Modal
