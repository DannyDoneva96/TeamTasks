import React from 'react'
import './Emloyee.css'

const Employee = ({employee}) => {
  return (
    <section>
        <div className="swiper mySwiper containerWishes">
            <div className="swiper-wrapper contentWishes">
                <div className="swiper-slide card">
                    <div className="card-content">
                        <div className="imageW">
                            <img src={employee.imageUrl} alt="photo1" />
                        </div>
                        <div className="media-icons">

                        <i class="fa-solid fa-star"></i>

                        </div>
                        <div className="name-prof">
                            <span className="nameW">{employee.fullName}</span>
                            <span className="prof">{employee.position}</span>
                            <p className="desc-topEmp">Completed Tasks: {employee.completedTasks}</p>
                        </div>

                        <div className="btnW">
                        <button   className="btnWishEdit">Edit</button>
                            <button  className="btnWishDel">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Employee
