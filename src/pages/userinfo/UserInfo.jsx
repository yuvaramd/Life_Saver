import './userinfo.css'
import { useState } from 'react'
import {withFirestore} from 'react-firestore'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";


function UserInfo() {
    const [name,setName] = useState("")
    const [pnumber, setPnumber] = useState()
    const [county, setCounty] = useState("")
    const[state, setState] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [bloodgroup, setBloodGroup] = useState("")
    const [age, setAge] = useState("")
    const[{basket,user},dispatch] = useStateValue();
    const history = useHistory();

    // const emailValidation = (e) =>{
    //     setUserEmail(e)
    // }

    const dataToSend = {
        name:name,
        phoneNumber:pnumber,
        county:county,
        state:state,
        email:userEmail,
        bloodgroup: bloodgroup,
        age:age
    }

    const getName = (e)=> {
        e.preventDefault()
        setName(e.target.value)
    }
    const getBloodGroup = (e) => {
        e.preventDefault()
        setBloodGroup(e.target.value)
    }

    const getEmail = (e) => {
        e.preventDefault()
        setBloodGroup(e.target.email)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // emailValidation(user.email)
        db.collection("users").add({
            name:name,
            phoneNumber:pnumber,
            county:county,
            state:state,
            email:user.email,
            bloodgroup: bloodgroup,
            age:age
        })
        .then((docRef) => {
            
        })
        .then(history.push("/userhome"))
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
                Age
            </label>
            <input type="tel" required  id="hiName" value={age} onChange={(e)=> {
                    e.preventDefault() 
                    setAge(e.target.value)
                 }
            }/>
            <label>
                Blood Group
            </label>
            <select name="" id="hiBloodGroup" value={bloodgroup} onChange = {getBloodGroup}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
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

export default UserInfo;
