import React from 'react'

const ErrorPage = () => {
  return (
    <div >
        <p className="topEmpHeading">Oop something went wrong</p>
      <img style={{margin:'auto',display:'block'}} src={require('../assets/images/errpage-removebg-preview.png')} alt="" />
      
      <p style={{ textAlign: 'center', fontSize: '2rem' }}>Go  <a style={{ color: ' #b968c5' }} href="/">Home</a> or get back to work <button className='get-st-btn' ><a className='ank-home' href="/taskManager">Task Manager</a></button></p>
           
    </div>
  )
}

export default ErrorPage
