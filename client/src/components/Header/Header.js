import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const user = true;
  return (
    <div className='header-container'>
          <Link to="/"> <img src={require('../../assets/images/Task Manager.png')} alt="" /></Link>
       
         <ul className='header-options'> 
            <Link to="/taskManager" ><li> Tasks</li></Link>
            <Link to="/employees" ><li>Employees</li></Link>
         </ul>
        


    </div>
  )
}

export default Header
