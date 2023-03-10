import React ,{ useState, useEffect }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';


import { db } from '../../firebase'

import { collection, getDocs, addDoc,updateDoc ,doc,deleteDoc} from 'firebase/firestore'






import Employee from './Employee/Employee';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Employees.css'
import { nanoid } from '@reduxjs/toolkit';


const Employees = () => {

const empRef = collection(db, "employees"); 
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees =  async () => {
            const data = await getDocs(empRef);
            const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setEmployees(employees);}
            getEmployees()
          
    }, []);



    return (
        <div className="employees-container">
            <h2 className="topEmpHeading">Our Top Employees</h2>
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
                        return(
                            <SwiperSlide>
                                <Employee key={nanoid()} employee={employee}/>
                            </SwiperSlide>
                            );
                          }) : <p>No employees found.</p>}

                {/* <SwiperSlide>
                    <Employee />
                </SwiperSlide> */}




            </Swiper>
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
                        {employees?
                        employees.map((employee)=> {
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
                          }) : null}
                        <tr>
                            <td>John Dan</td>
                            <td>john@john-dan.com</td>
                            <td>01.01.2000</td>
                            <td>01-00-2222</td>
                            <td>1234</td>
                            <td>3</td>

                        </tr>
                        <tr>
                            <td>Max Peterson</td>
                            <td>max@softuni.bg</td>
                            <td>01.01.2000</td>
                            <td>01-00-2222</td>
                            <td>1234</td>
                            <td>14</td>



                        </tr>
                        <tr>
                            <td>Philip Anderson</td>
                            <td>philip@softuni.bg</td>
                            <td>01.01.2000</td>
                            <td>01-00-2222</td>
                            <td>1234</td>
                            <td>5</td>



                        </tr>
                        <tr>
                            <td>Sam Lima</td>
                            <td>sam@gmail.com</td>
                            <td>01.01.2000</td>
                            <td>01-00-2222</td>
                            <td>1234</td>
                            <td>3</td>



                        </tr>
                        <tr>
                            <td>Eva Longoria</td>
                            <td>eva@gmail.com</td>
                            <td>01.01.2000</td>
                            <td>01-00-2222</td>
                            <td>1234</td>
                            <td>2</td>



                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="6">
                                <input type="text" id="searchField" />
                                <button type="button" id="searchBtn">Search</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Employees
