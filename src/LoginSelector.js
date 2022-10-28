import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './LoginSelector.css'

function Loginselector(){
    return (
        <div className='loginselector'>
            <Link to ='/login'>
                <img
                className = "hospitalsigninpicture"
                src = 'https://i.ibb.co/0jZn31r/Screen-Shot-2022-10-27-at-8-09-00-PM.png'
                />
            </Link>
            <span 
                className="hospitallogin">
                Hospital Users Sign Up/ Login
            </span>
            <Link to ='/login'>
                <img
                className = "hospitalsigninpicture"
                src = 'https://github.com/Cher-253/LifeSaverImages/blob/main/donorsigninpic.png?raw=true'
                />
            </Link>

        </div>
    )
}

export default Loginselector
