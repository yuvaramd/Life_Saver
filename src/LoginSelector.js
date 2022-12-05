import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './LoginSelector.css'

function Loginselector(){
    const [userType, setUserType] = useState("hello");
    return (
        <div className='maindivlogin' >
        <div className='loginselectorH'>
            <Link to ='/login'>
                <img
                className = "hospitalsigninpicture"
                src = 'https://i.ibb.co/gwKQ7nW/hosplogin.png'
                />
            </Link>
            </div>
            <div className='loginselectorD'>
            <Link to ='/login'>
                <img
                className = "hospitalsigninpicture"
                src = 'https://i.ibb.co/bQxqsRq/donorlogin.png'
                />
            </Link>
</div>
        </div>
    )
}

export default Loginselector
