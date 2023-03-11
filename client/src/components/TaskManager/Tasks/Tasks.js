import React from 'react'
import './Task.css'

const Tasks = () => {
  return (
    <div className="to-do-cont">
        <div className="cont-task-s">
      <h4 className="title-task">Task 1 </h4>
      <div className="icons-task">
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>
      </div>
      <div className="descript-task">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptate id</div>
      </div>
      <div className="second-part">
        <div className="timeSet"><i class="fa-regular fa-clock"></i>To be completed before:</div>
        <button className="status">Completed</button>
      </div>
    </div>
  )
}

export default Tasks
