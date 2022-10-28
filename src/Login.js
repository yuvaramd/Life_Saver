import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hospitalType, setHospitalType] = useState(false);

    const checkboxControl = (e) => {
        e.preventDefault()
        setHospitalType(e.target.checked)
    }
    
    const linkToPush = hospitalType ? '/hospitalinfo' : '/userinfo'
    const linkToPushForHome = hospitalType ? '/hospitalhome' : '/userhome'
    

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push(linkToPushForHome)
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                // it successfully created a new user with email and password
                if (auth) {
                    history.push(linkToPush)
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to ="/">
                <img  
                    className = "login__logo"
                    src = "https://pngimg.com/uploads/amazon/amazon_PNG24.png " 
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value = {email} onChange = 
                    {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = 
                    {e => setPassword(e.target.value)}/>
                    <div className='checkbox-ui'>
                        <h5>Login/Register as Hospital</h5>
                        <input type="checkbox" value={hospitalType} onChange={checkboxControl}></input>
                    </div>
                  
                    <button type="submit" onClick={signIn}
                    className="login__signInButton">Sign in</button>
                    
                </form>
                <p>
                    By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                </p>    

                <button onClick = {register}
                className="login__registerButton">Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
