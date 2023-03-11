import React from 'react'
import { useState } from 'react'
import './Modal.css'
const Modal = (props) => {


    const [employee, setEmployee] = useState({
        fullName: '',
        imageUrl: '',
        completedTasks: 0,
        dateOfBirth: '',
        email: '',
        monthlySalary: 0,
        phoneNumber: '',
        position: ''

    });
    const onSubmit = (e) => {
        props.addEmployee(employee)
        props.onClose()
    }

    const onChange = (e) => {
        setEmployee(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div style={props.show ? { display: 'block' } : { display: 'none' }} className="modal modalNone" onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>

                <div className="modal-header">
                    <h4 className="modal-title"> Add new employee </h4>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" placeholder="Name" name="fullName" onChange={onChange} value={employee.fullName}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="text" placeholder="dd/mm/yy" name="dateOfBirth" onChange={onChange} value={employee.dateOfBirth}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" onChange={onChange} value={employee.phoneNumber}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="email" name="email" onChange={onChange} value={employee.email}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="imageUrl">Image url</label>
                        <input type="text" placeholder="imageUrl" name="imageUrl" onChange={onChange} value={employee.imageUrl}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="position">Position</label>
                        <input type="text" placeholder="position" name="position" onChange={onChange} value={employee.position}></input>
                        <span className="bar"></span>

                    </div>


                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="monthlySalary">Monthly Salary</label>
                        <input type="text" name="monthlySalary" onChange={onChange} value={employee.monthlySalary}></input>
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
