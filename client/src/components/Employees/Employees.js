import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';
import { db } from '../../firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import Employee from './Employee/Employee';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Employees.css'
import { nanoid } from '@reduxjs/toolkit';
import Modal from './Modal/Modal';


const Employees = () => {

    const empRef = collection(db, "employees");
    const [employees, setEmployees] = useState([]);
    const [show, setShow] = useState(false)
    const [searchInputValue, setSearchInputValue] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);

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
    }

    useEffect(() => {
        setFilteredEmployees(
            employees.filter((employee) =>
                employee.fullName.toLowerCase().includes(searchInputValue.toLowerCase())
            )
        );
    }, [searchInputValue, employees]);


    return (
        <div className="employees-container">
            <h2 className="topEmpHeading">Our Top Employees</h2>
            <div className="emp-add">
                <button onClick={() => setShow(true)} className="get-started-btn">+Add</button>

                <Modal onClose={() => setShow(false)} show={show} addEmployee={addEmployee} />

                <Swiper
                    slidesPerView={4}
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


                    {employees
                        ? employees.map((employee) => {
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
                                    <tr>
                                        <td>{employee.fullName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dateOfBirth}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>{employee.monthlySalary}</td>
                                        <td>{employee.completedTasks}</td>
                                    </tr>
                                ); })

                           : employees.map((employee) => {
                                    return (
                                        <tr>
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
                                <input type="text" id="searchField" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
                                <button type="button" id="searchBtn" >Search</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Employees
