import React from 'react'
import './Header.css'
const Header = () => {
    const user = true;
  return (
    <div className='header-container'>
        <img src={require('../../assets/images/Task Manager.png')} alt="" />
       
         <ul className='header-options'> 
            <li>Tasks</li>
            <li>Employees</li>
         </ul>
        


    </div>
  )
}

export default Header
