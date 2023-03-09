import React from 'react'

const Header = () => {
    const user = true;
  return (
    <div className='header-container'>
        <img src={require('../assets/images/Task Manager.png')} alt="" />
       
        {user?
         <ul className='header-options'> 
            <li>Tasks</li>
            <li>Employees</li>
            <li>Logout</li>
         </ul>
        : <ul className='header-options'>
            <li>Login</li>
            <li>Tasks</li> 
            <li>Employees</li>

         </ul>}


    </div>
  )
}

export default Header
