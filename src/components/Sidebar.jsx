import React, { useEffect, useState } from 'react'
import '../styles/SidebarStyle.css'
export default function Sidebar() {

    return (
        <div className='sidebar'>
            <p>Contact me</p>
            <ul>
                <li><a href="https://www.instagram.com/gharti_bikram1/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/bikram-magar-382b26247/">Linkdeln</a></li>
                <li><a href="https://github.com/BikramGhart1">Github</a></li>
            </ul>
        </div>
    )
}
