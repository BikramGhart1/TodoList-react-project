import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/AddElementStyle.css'
const whileClicked = {
    display: 'block',
    position: 'fixed',
    right: '10%',
    bottom: '25%',
    backgroundColor: '#1C1C1C',
    padding: '2%',
    zIndex: 2500,
    '@media(max-width:768px)': {
        padding: '5%'
    }
}
const notClicked = {
    display: 'none'
}
const closeButtonStyle = {
    width: '8%',
    backgroundColor: '#9A1818',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '50%',
    marginLeft: '85%'
}
export default function AddElement({ getValueFromAdd }) {
    const [title, setTitle] = useState('');
    const [descVal, setDescVal] = useState('');
    const [clicked, setClicked] = useState(false);
    const [date, setDate] = useState('');
    const updatedVal = {
        title: title,
        desc: descVal,
        date: date,
        id: uuidv4(),
        statusM: false,
    }
    const titleOnChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const descOnChangeHandler = (event) => {
        setDescVal(event.target.value);
    }

    //toggle add button
    const addTaskHanle = () => {
        setClicked(!clicked);
    }

    //update date
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    //close button
    const closeButtonHandle = (event) => {
        event.preventDefault();
        setClicked(false);
    }

    //submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        getValueFromAdd(updatedVal);
        setClicked(false);
        setTitle('');
        setDescVal('');
        setDate('');
    }
    return (
        <>
            <div className="add-content" style={clicked ? whileClicked : notClicked}>

                <form action="" className='form-new'>
                    <button className='close-button' style={closeButtonStyle} onClick={closeButtonHandle}>X</button>
                    <input type="text" placeholder='Enter the title' value={title} onChange={titleOnChangeHandler} />
                    <textarea name="" placeholder='Enter the task details' value={descVal} onChange={descOnChangeHandler} id="" />
                    <label className='due-date'>
                        Enter Due Date:
                        <input type="date" onChange={dateChangeHandler} />

                    </label>
                    <button type='submit' className='add-button' onClick={handleSubmit} value={date}>Add</button>
                </form>
            </div>
            <div className='add-task'>
                <button onClick={addTaskHanle}>+</button>
            </div>

        </>

    )
}
