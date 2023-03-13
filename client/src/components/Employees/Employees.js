import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { db } from '../../firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import Employee from './Employee/Employee';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Employees.css'
import { nanoid } from '@reduxjs/toolkit';
import Modal from './Modal/Modal';
import EditModal from './Modal/EditModal';

const Employees = () => {

    const empRef = collection(db, "employees");
    const [employees, setEmployees] = useState([]);
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
  
    SwiperCore.use([Pagination, Navigation]);

    useEffect(() => {
        const getEmployees = async () => {
            const data = await getDocs(empRef);
            const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setEmployees(employees);
        }
        getEmployees()

    }, []);

    const addEmployee = async (employee) => {
        await addDoc(empRef, employee)
        setEmployees([...employees, employee]);
    }
    const deleteEmployee = async (id) => {
        const empDoc = doc(db, "employees", id);
        await deleteDoc(empDoc);
        // remove from the state
        setEmployees(prevState => prevState.filter(emp => emp.id !== id));

    }
    const updateEmployee = async (id, empData) => {
        const empDoc = doc(db, "employees", id);
        const newData = empData
        await updateDoc(empDoc, newData)
    }

    useEffect(() => {
        setFilteredEmployees(
            employees.filter((employee) =>
                employee.fullName.toLowerCase().includes(searchInputValue.toLowerCase())
            )
        );
    }, [searchInputValue, employees]);

    //get the top 5
    const topEmployees = employees.slice().sort((a, b) => b.completedTasks - a.completedTasks).slice(0, 5);

    const breakpoints = {
        // when window width is >= 640px
        200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }

    return (
        <div className="employees-container">
            <h2 className="topEmpHeading">Our Top Employees</h2>
            <div className="emp-add">
                <button onClick={() => setShow(true)} className="addBtn">+Add Employee</button>

                <Modal onClose={() => setShow(false)} show={show} addEmployee={addEmployee} />

                <Swiper
                     breakpoints={breakpoints}
                     slidesPerView={5}
                     spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper ddd"
                >


                    {topEmployees
                        ? topEmployees.map((employee) => {
                            return (
                                <SwiperSlide>
                                    <Employee key={nanoid()} employee={employee} />
                                </SwiperSlide>
                            );
                        }) : <p>No employees found.</p>}

                    {/* <SwiperSlide>
                    <Employee />
                </SwiperSlide> */}




                </Swiper>
            </div>
            <div className="top-emp"></div>
            <div className="employee-table-container">
                <table className="container">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th> Email</th>
                            <th> Date of Birth</th>
                            <th> Phone</th>
                            <th> Month salary</th>
                            <th> Completed Tasks </th>

                        </tr>
                    </thead>

                    <tbody>


                        {filteredEmployees ?

                            filteredEmployees.map((employee) => {
                                return (
                                    <tr key={nanoid()}>
                                        <td>{employee.fullName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dateOfBirth}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>{employee.monthlySalary}</td>
                                        <td>{employee.completedTasks}</td>
                                        <td className="td-btn">
                                            <button style={!showEdit ? { display: 'block' } : { display: 'none' }} 
                                            className='addBtn' onClick={() => {
                                                setSelectedEmployeeId(employee.id);
                                                setShowEdit(true);
                                            }}>Edit</button>

                                            <EditModal
                                                onClose={() => {
                                                    setShowEdit(false);
                                                    setSelectedEmployeeId(null);
                                                }}
                                                showEdit={showEdit && selectedEmployeeId === employee.id}
                                                updateEmployee={updateEmployee(employee.id, employee)}
                                                employee={employee}
                                            />

                                            <button style={!showEdit ? { display: 'block' } : { display: 'none' }} 
                                            className='addBtn' onClick={() => { deleteEmployee(employee.id) }}  >Delete</button>

                                        </td>

                                    </tr>
                                );
                            })

                            : employees.map((employee) => {
                                return (
                                    <tr key={nanoid()} >
                                        <td>{employee.fullName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dateOfBirth}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>{employee.monthlySalary}</td>
                                        <td>{employee.completedTasks}</td>
                                    </tr>
                                );
                            })}

                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="6">
                                <input type="text" placeholder="Name of the employee" id="searchField" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
                                <button type="button" id="searchBtn" >Search </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Employees
