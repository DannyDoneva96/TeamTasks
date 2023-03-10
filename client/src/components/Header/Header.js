import React from 'react'

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
