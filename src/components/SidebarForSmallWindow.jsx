import React, { useState } from 'react'
import '../styles/SFSWStyles.css'
export default function SidebarForSmallWindow({ hamStatus, onCloseHamMenu }) {

    return (
        <div className={`side-bar-small ${hamStatus ? 'visible' : 'hidden'}`}>
            <div className="cross" onClick={onCloseHamMenu}>X</div>
            <div className='intro-container-small'>
                <h2>Hello there!</h2>
                <p>Stuck because of the unorganized working way?</p>
                <p className='sinmple-notes'>Now come be unstuck </p>
            </div>
            <div className='contact-small'>
                <p>Contact me</p>
                <ul>
                    <li><a href="https://www.instagram.com/gharti_bikram1/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/bikram-magar-382b26247/">Linkdeln</a></li>
                    <li><a href="https://github.com/BikramGhart1">Github</a></li>
                </ul>
            </div>
        </div>
    )
}
