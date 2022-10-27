import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const[{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                {/* <img className="header__logo"
                    src = "https://i.ibb.co/K0hbXh8/logoerased.png"
                /> */}
            </Link>

        <div className="HospitalDonorLogin">
            <Link to="/loginselector">
                {/* <img className="header__logo"
                    src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                /> */}
            </Link>
       </div>     
            
        {/* <div
        className="header__search">
            <input
            className="header__searchInput"
            type="text"/>
            <SearchIcon
            className="header__searchIcon"/>
        </div> */}




    
        <div className="header__nav">
            <img className="header__logo"
                    src = "https://i.ibb.co/fxqSs8h/finallogo2.png"
                />
            <Link to={!user && "/logintest"}>
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

            {/* <div className="header__test">
                <Link to = '/logintest'>
                <span
                className="header__test1">
                    Login
                </span>
                </Link>
            </div> */}

            {/* <div className="header__option">
                <span
                className="header__optionLineOne">
                    Returns
                </span>
                <span 
                className="header__optionLineTwo">
                    & Orders
                </span>
            </div> */}

            {/* <div className="header__option">
                <span
                className="header__optionLineOne">
                    Your
                </span>
                <span 
                className="header__optionLineTwo">
                    Prime
                </span>
            </div>
            <Link to = "/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo
                    header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
             */}

        </div>
    </div>


    )
}


export default Header

