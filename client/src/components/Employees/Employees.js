import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';

import Employee from './Employee/Employee';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Employees.css'


const Employees = () => {
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

                <SwiperSlide>
                    <Employee />
                </SwiperSlide>

                <SwiperSlide>
                    <Employee />
                </SwiperSlide>

                <SwiperSlide>
                    <Employee />
                </SwiperSlide>

                <SwiperSlide>
                    <Employee />
                </SwiperSlide>

                <SwiperSlide>
                    <Employee />
                </SwiperSlide>




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
