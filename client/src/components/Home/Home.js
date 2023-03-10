import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">

            <div className="home-get-started">
                <div className="q-q-1">
                  <h3 className="quote">"Time is the scarcest resource and  unless it is managed nothing else <br/>can be managed." -Peter Drucker </h3> 
                  <div className='container-btn'>
                  <button className="get-started-btn">GET STARTED</button></div></div>
                <div className="home-col-1">
                    <>
                    <h1 className="main-h">What is task manager?</h1>
                    <p className="main-p">A task manager is an application that helps our company organize our work and stay focused. It helps us stay on top of our work, tackle multiple tasks, and stay organized. You can use a task manager to keep your work organized day in and day out. </p></>
                    <img src={require('../../assets/images/what are.png')} alt="" />
                </div>
                <div className="home-col-2">
                    <>
                    <h2 className="home-h2">What are task manager apps used for?</h2>
                    <p className="home-p">Task manager apps are used by individuals or small and larger teams to efficiently accomplish tasks and complete projects by organizing and prioritizing their work. </p></>
                    <img src={require('../../assets/images/why-use.png')} alt="" />

                </div>

            </div>

            <div className="home-topEmployee">
                <img src={require('../../assets/images/top-5-removebg-preview.png')} alt="" />
                <h2 className="home-h2">Top Five Employees</h2>
                <p className='desc-employee-home'>Our top 5 employees are the backbone of our company and have demonstrated their exceptional abilities by completing the most tasks in the company. They consistently go above and beyond to achieve outstanding results, demonstrating a strong work ethic and exceptional skills in their respective fields. Their dedication and commitment to their work has made them valuable assets to our team, and they have shown their ability to lead, inspire and motivate their colleagues. They possess outstanding communication skills and are always willing to lend a helping hand. Their contributions to our company have been instrumental in our success, and we are proud to have them on our team."</p>
                 <p>See our top <a href="/employee">employees</a>or become one of them <button><a href="/taskManager">Get Started</a></button></p>
            </div>

        </div>
    )
}

export default Home
