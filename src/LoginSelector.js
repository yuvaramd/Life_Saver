import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './LoginSelector.css'

function Loginselector({userType}){
    const [userType, setUserType] = useState("hello");
    return (
        <div className='loginselector'>
            <Link to ='/login'>
                <img
                className = "hospitalsigninpicture"
                src = 'https://raw.githubusercontent.com/Cher-253/LifeSaverImages/main/hospitalsigninpic.jpeg'
                />
            </Link>

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
