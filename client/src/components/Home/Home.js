import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">

            <div className="home-get-started">
                <div className="q-q-1">
                    <h3 className="quote">"Time is the scarcest resource and  unless it is managed nothing else <br />can be managed." -Peter Drucker </h3>
                </div>

                <div className="home-col-1">
                    <Link to="/">
                        
                        <img src={require('../../assets/images/what are.png')} alt="" />
                    </Link>                    <div className="des">
                        <h1 className="main-h">What is task manager?</h1>
                        <p className="main-p">A task manager is an application that helps our company organize our work and stay focused. It helps us stay on top of our work, tackle multiple tasks, and stay organized. You can use a task manager to keep your work organized day in and day out.<div className='container-btn'>
                        <Link to="/taskManager">  <button className="get-started-btn">GET STARTED</button>  </Link> </div> </p></div>
                       
                </div>
                <div className="home-col-1">
                    <div className="des">
                        <h2 className="main-h">What are task manager apps used for?</h2>
                        <p className="main-p ">Task manager apps are used by individuals or small and larger teams to efficiently accomplish tasks and complete projects by organizing and prioritizing their work. </p></div>
                    <img src={require('../../assets/images/why-use.png')} alt="" />

                </div>

            </div>

            <div className="home-topEmployee">
                <h2 className="main-h">Top Five Employees</h2>
                <div className="home-col-emp">
                    <img src={require('../../assets/images/top-5-removebg-preview.png')} alt="" />

                    <p className='desc-employee-home main-p' >Our top 5 employees are the backbone of our company and have demonstrated their exceptional abilities by completing the most tasks in the company.<br /> They consistently go above and beyond to achieve outstanding results, demonstrating a strong work ethic and exceptional skills in their respective fields. Their dedication and commitment to their work has made them valuable assets to our team, and they have shown their ability to lead, inspire and motivate their colleagues.<br /> We are proud to have them on our team."</p>
                </div>
                <p style={{ textAlign: 'center', fontSize: '2rem' }}>See our top <a style={{ color: ' #b968c5' }} href="/employees">employees</a> or become one of them <button className='get-st-btn' ><a className='ank-home' href="/taskManager">Get Started</a></button></p>
            </div>

        </div>
    )
}

export default Home
