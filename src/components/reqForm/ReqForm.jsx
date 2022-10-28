import './reqform.css'
import { useState } from 'react'
import {withFirestore} from 'react-firestore'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";


function ReqForm() {
    const [name,setName] = useState("")
    const [pnumber, setPnumber] = useState()
    const [county, setCounty] = useState("")
    const[state, setState] = useState("")
    
    const [bloodgroup, setBloodGroup] = useState("")
    const [ageLimit, setAgeLimit] = useState("")
    const[amount,setAmount] = useState("")
    const [date, setDate] = useState("")
    const rfstory = useHistory();

    const[{user}] = useStateValue();

   

    const dataToSend = {
        bloodgroup: bloodgroup,
        name:name,
        phoneNumber: pnumber,
        ageLimit: ageLimit, 
        amount: amount,
        date: date,
        county:county, 
        state:state
    }

    const clearInput = () => {
        setAgeLimit("")
        setAmount("")
        setBloodGroup("")
        setCounty("")
        setDate("")
        setName("")
        setPnumber("")
        setState("")
    }
    const getBloodGroup = (e) => {
        e.preventDefault()
        setBloodGroup(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        db.collection("requests").add(dataToSend)
        .then((docRef) => {
            alert("Thanks for making a request")
        })
        .then(
            clearInput()
        )
        .catch((err) => {
            console.log("Error adding document:", err);
        })
        
    }

  return (
    <div class='rf-container'>
        
        <form className="rf-form">
            <div class="rf-header">
                Make a Blood Donation Request
            </div>
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
                Name of the hospital
            </label>
            <input type="text" required  value={name} id="rfName" onChange={(e)=> {
                    e.preventDefault() 
                    setName(e.target.value)
                 }}/>
            <label>
                Phone Number
            </label>
            <input type="tel" required  value={pnumber} id="rfName" onChange={(e)=> {
                    e.preventDefault() 
                    setPnumber(e.target.value)
                 }}/>
             <label>
                Age Limit
            </label>
            <input type="number" required  value={ageLimit} id="rfName" onChange={(e)=> {
                    e.preventDefault() 
                    setAgeLimit(e.target.value)
                 }}/>
            <label>
                Amount ($)
            </label>
            <input type="number" required  value={amount} id="rfName" onChange={(e)=> {
                    e.preventDefault() 
                    setAmount(e.target.value)
            }}/>
            <label>
                Date, required before
            </label>
            <input type="date" required  value={date} id="rfName" onChange={(e)=> {
                    e.preventDefault() 
                    setDate(e.target.value)
            }}/>
            
            <label>
                County
            </label>
            <input type="text" required  value={county} id="rfName" onChange={(e)=> {
                    e.preventDefault() 
                    setCounty(e.target.value)
                 }}/>
            <label>
                State
            </label>
            <input type="text" required  value={state} id="rfName" onChange={(e)=> {
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

export default ReqForm;
