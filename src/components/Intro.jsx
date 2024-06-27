import React, { useState } from 'react'
import '../styles/IntroStyle.css'
export default function Intro({ onHamMenu }) {
    return (
        <div className="into">
            <div className="hamburger-menu"><svg onClick={onHamMenu} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg></div>
            <div className='intro-container'>
                <h2>Hello there!</h2>
                <p>Stuck because of the unorganized working way?</p>
                <p className='sinmple-notes'>Now come be unstuck </p>
            </div>
            <div className="Main-title">

                <h1>unorganized TO-DO List </h1>
            </div>
        </div>

    )
}
