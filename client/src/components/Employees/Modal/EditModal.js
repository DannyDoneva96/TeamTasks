import React from 'react'
import { useState, useEffect } from 'react'
import './Modal.css'

const Modal = (props) => {


    const [editEmployee, setEditEmployee] = useState({
        fullName: '',
        imageUrl: '',
        completedTasks: 0,
        dateOfBirth: '',
        email: '',
        monthlySalary: 0,
        phoneNumber: '',
        position: ''

    });
    useEffect(() => {


        setEditEmployee({
            fullName: props.employee.fullName,
            imageUrl: props.employee.imageUrl,
            dateOfBirth: props.employee.dateOfBirth,
            email: props.employee.email,
            monthlySalary: props.employee.monthlySalary,
            phoneNumber: props.employee.phoneNumber,
            position: props.employee.position,

        });


    }, []);
    
    const onSubmit = (e) =>{
        props.updateEmployee(props.employee.id,editEmployee)
        props.onClose()
    }

    const onChange=(e)=>{
        setEditEmployee(state=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }

    return (
        <div style={props.showEdit ? { display: 'block' } : { display: 'none' }} className="edit-container" onClick={props.onClose} >
            <div className="edit-next-cont" onClick={e => e.stopPropagation()}>

                <div className="edit-sec">
                    <h4 className="modal-title"> Edit employee </h4>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" placeholder="Name" name="fullName" onChange={onChange} value={props.employee.fullName}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="text" placeholder="dd/mm/yy" name="dateOfBirth" onChange={onChange} value={props.employee.dateOfBirth}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" onChange={onChange} value={props.employee.phoneNumber}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="email" name="email" onChange={onChange} value={props.employee.email}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="imageUrl">Image url</label>
                        <input type="text" placeholder="imageUrl" name="imageUrl" onChange={onChange} value={props.employee.imageUrl}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="position">Position</label>
                        <input type="text" placeholder="position" name="position" onChange={onChange} value={props.employee.position}></input>
                        <span className="bar"></span>

                    </div>


                    <div className="">
                        <i className="fas fa-user"></i>
                        <label htmlFor="monthlySalary">Monthly Salary</label>
                        <input type="text" name="monthlySalary" onChange={onChange} value={props.employee.monthlySalary}></input>
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
