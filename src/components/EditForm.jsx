import React, { useEffect, useState } from 'react'
import '../styles/EditFormStyle.css'

export default function EditForm({ toEditTask, onUpdate }) {
    const [task, setTask] = useState(toEditTask);
    useEffect(() => {
        setTask(toEditTask);

    }, [toEditTask]);
    const hanldeChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(task);
    }
    console.log("edit task: ", task);
    if (!task) {
        return null;
    }
    return (
        <div className='updation'>
            <form action="" className='update-form' onSubmit={handleSubmit}>
                <input type="text" value={task.title} name='title' onChange={hanldeChange} />
                <textarea name="desc" value={task.desc} onChange={hanldeChange}></textarea>
                <input type="date" name='date' value={task.date} onChange={hanldeChange} />
                <button type='submit' >Update</button>
            </form>
        </div>
    )
}
