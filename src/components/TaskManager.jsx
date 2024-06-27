// responsive
// localstorage

//logic for edit option
//first send id of the task to app
//find the task to be edited using Array.find and id from here
//put that task into a state and pass it to edit form
//only render the edit form when state is not null
//when something comes in our usestate, edit form will render  
//in edit form there will be a state for task that arrives as prop
//we will put value from that initial state into input boxes
//now when user changes value in input they will be refactored and updated in state as new task
//finally submit button will pass that new updated task to app
//and app will replace previous task with new task
//and set the state to null for remove rendering
import React from 'react'
import '../styles/TaskManagerStyle.css'
//styles

const trueStatus = {
    color: '#2c881b'

}
const falseStatus = {
    color: '#99585C'

}

export default function TaskManager({ tasks, getRemoveId, getStatusId, getEditId }) {
    return (
        <div className='task-manager'>
            {tasks.map((task) => (
                (task.title) && (
                    <div className='task-element' key={task.id}>
                        <div className="details">
                            <h3>{task.title}</h3>
                            <p>{task.desc}</p>
                            <sub className='due-data' style={(task.statusM) ? trueStatus : falseStatus}>{task.date}</sub>
                            <p className='status' style={(task.statusM) ? trueStatus : falseStatus}>{(task.statusM) ? 'Complete' : 'Incomplete'}</p>
                        </div>
                        <div className="more">

                            <button>::</button>

                            <div className="more-details">
                                <p onClick={() => getEditId(task.id)}>Edit</p>
                                <p onClick={() => getRemoveId(task.id)}>Remove</p>
                                <p onClick={() => getStatusId(task.id)}>{(task.statusM) ? 'Mark as undone' : 'Mark as done'}</p>
                            </div>
                        </div>
                    </div>

                )
            ))}
        </div>
    )
}
