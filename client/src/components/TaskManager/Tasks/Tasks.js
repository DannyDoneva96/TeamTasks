import React,{useState} from 'react'
import EditTaskModal from '../Modal/EditTaskModal'
import './Task.css'

const Tasks = (props) => {

    const [show, setShow] = useState(false)
    return (
        <div className="to-do-cont">
            <div className="cont-task-s">
                <h4 className="title-task">{props.task.title}</h4>
                <div className="icons-task">
                <button className='delete-task-btn' onClick={() => setShow(true)} >  <i className="fa-regular fa-pen-to-square"></i></button>
                  <EditTaskModal task={props.task} show={show} updateTask={props.updateTask} onClose={() => setShow(false)} />
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
