import './hospitalinfo.css'
import { useState } from 'react'
import {withFirestore} from 'react-firestore'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";


function HospitalInfo() {
    const [name,setName] = useState("")
    const [pnumber, setPnumber] = useState()
    const [county, setCounty] = useState("")
    const[state, setState] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const history = useHistory();

    const[{user}] = useStateValue();



    const dataToSend = {
        name:name,
        phoneNumber:pnumber,
        county:county,
        state:state,
        email:userEmail,
    }

    const getName = (e)=> {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // emailValidation(user.email)
        db.collection("hospitals").add({
            name:name,
            phoneNumber:pnumber,
            county:county,
            state:state,
            email:user.email,
        })
        .then((docRef) => {
            
        })
        .then(history.push("/hospitalhome"))
        .catch((err) => {
            console.log("Error adding document:", err);
        })
        
    }

  return (
    <div class='hi-container'>
        
        <form className="hi-form">
            <div class="hi-header">
            Thanks for registering, pls help us with the information! 
            </div>
            <label>
                Name
            </label>
            <input type="text" required  id="hiName" value={name} onChange={getName}/>
            <label>
                Phone Number
            </label>
            <input type="tel" required  id="hiName" value={pnumber} onChange={(e)=> {
                    e.preventDefault() 
                    setPnumber(e.target.value)
                 }
            }/>
            <label>
                County
            </label>
            <input type="text" required  value={county} id="hiName" onChange={(e)=> {
                    e.preventDefault() 
                    setCounty(e.target.value)
                 }}/>
            <label>
                State
            </label>
            <input type="text" required  value={state} id="hiName" onChange={(e)=> {
                    e.preventDefault() 
                    setState(e.target.value)
                 }}/>
           <Link to="/">
            <button className="add-btn" onClick={handleSubmit}> Add Information</button>
           </Link>
        </form>
    </div>
  )
}

export default HospitalInfo;
