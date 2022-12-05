import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const[{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
            window.location.replace("/")
        }
    }

    return (
        <div className="header">
            <h1 style={{color:"white", marginRight:"10px", marginLeft:"20px"}}>
                LifeStream
            </h1>

        <div className="HospitalDonorLogin">
            <Link to="/loginselector">
                {/* <img className="header__logo"
                    src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                /> */}
            </Link>
       </div>     
            
        <div className="header__nav">
            <Link to={!user && "/login"}>
                <div onClick = {handleAuthentication}className="header__option">
                    <span className="header__optionLineOne">
                        Hello -   
                     {!user ? 'Guest' : user.email}</span>
                    <span 
                        className="header__optionLineTwo">{user ?
                        "Sign out":"Sign In"}
                    </span>
                </div>
            </Link>

            <div className="header__test">
                <Link to = '/logintest'>
                </Link>
            </div>
        </div>
    </div>


    )
}


export default Header
