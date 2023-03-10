import React from 'react'

const Employee = () => {
  return (
    <section>
        <div className="swiper mySwiper containerWishes">
            <div className="swiper-wrapper contentWishes">
                <div className="swiper-slide card">
                    <div className="card-content">
                        <div className="imageW">
                            <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt="photo1" />
                        </div>
                        <div className="media-icons">

                        <i class="fa-solid fa-star"></i>

                        </div>
                        <div className="name-prof">
                            <span className="nameW">Daniela</span>
                            <span className="prof">Web Developer </span>
                            <p className="something">desc</p>
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
