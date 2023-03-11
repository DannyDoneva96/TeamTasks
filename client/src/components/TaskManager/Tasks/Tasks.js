import React from 'react'
import './Task.css'

const Tasks = (props) => {

    return (
        <div className="to-do-cont">
            <div className="cont-task-s">
                <h4 className="title-task">{props.task.title}</h4>
                <div className="icons-task">
                    <i className="fa-regular fa-pen-to-square"></i>
                   <button className='delete-task-btn' onClick={()=>props.deleteTask(props.task.id)}> <i className="fa-solid fa-trash"></i></button>
                </div>
                
            </div><div className="descript-task">{props.task.description}</div>
            <div className="second-part">
                <div className="timeSet"><i className="fa-regular fa-clock"></i>To be completed before:{props.task.dueDate}</div>
                <button className="status">Completed</button>
            </div>
        </div>
    )
}

export default Tasks
