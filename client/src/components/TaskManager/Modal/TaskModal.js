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
    const [errors, setErrors] = useState({});

    const onSubmit = (e) => {
    e.preventDefault();

    // validate form
    const errors = validateForm(task);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // add task
    props.addTask(task);
    props.onClose();
  };

    const onChange = (e) => {
        setTask(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const validateForm = (values) => {
        const errors = {};
    
        // validate title
        if (!values.title) {
          errors.title = 'Title is required';
        } else if (values.title.length < 3 || values.title.length > 20) {
          errors.title = 'Title must be between 3 and 20 characters long';
        }
    
        // validate description
        if (!values.description) {
          errors.description = 'Description is required';
        } else if (values.description.length < 5 || values.description.length > 100) {
          errors.description = 'Description must be between 5 and 100 characters long';
        }
    
        // validate assignee
        if (!values.assignee) {
          errors.assignee = 'Assignee is required';
        }
    
        // validate dueDate
        if (!values.dueDate) {
          errors.dueDate = 'Due Date is required';
        }
    
        return errors;
      };

    return (
        <div style={props.show ? { display: 'block' } : { display: 'none' }} className="modal modalNone" onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>

                <div className="modal-header">
                    <h4 className="modal-title"> Add new Task</h4>
                    <div className="edit-form">
                    <i class="fa-solid fa-heading"></i>  
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="title" name="title" onChange={onChange} value={task.title}></input>
                        <span className="bar"></span>
                        {errors.title && <p className="error">{errors.title}</p>}
                    </div>
                    <div className="edit-form">
                    <i class="fa-solid fa-comment"></i>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" onChange={onChange} value={task.description}></input>
                        <span className="bar"></span>
                        {errors.description && <p className="error">{errors.description}</p>}

                    </div>
                    <div className="edit-form">
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
                        {errors.assignee && <p className="error">{errors.assignee}</p>}

                    </div>
                    <div className="edit-form">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                        <label htmlFor="dueDate">Due Date</label>
                        <input type="text" name="dueDate" onChange={onChange} value={task.dueDate}></input>
                        <span className="bar"></span>
                        {errors.dueDate && <p className="error">{errors.dueDate}</p>}

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
