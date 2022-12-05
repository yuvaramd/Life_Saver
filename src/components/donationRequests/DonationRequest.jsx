import './donationrequest.css'
import { functions} from '../../firebase'
import {httpsCallable} from "firebase/functions"
import axios from 'axios';
import {useStateValue} from "../../StateProvider"
import { useState } from 'react';


function DonationRequest({data}) {

  const[{basket,user},dispatch] = useStateValue();
  
  
  const client = axios.create({
      baseURL:"https://us-central1-lifestream-bde39.cloudfunctions.net/sendEmail"
  })

//   const client = axios.create({
//     baseURL:"http://localhost:5001/lifestream-bde39/us-central1/sendEmail"
//   })
  const sendEmail = functions.httpsCallable('sendEmail');
  const  sendEmailConfirmation = () =>{
    client.post('',{
        hospitalEmail:data.email,
        donorEmail:user.email,
        bloodGroup: data.bloodgroup,
        hospitalName: data.name, 
        hospitalPNumber: data.phoneNumber, 
        bloodAmount: data.amount
    })
    .then(() => {
        
        alert("Confirmation Sent")
        
        })
    .catch(err => alert(err) )

    
    
  }
 
  return (
    <div className='dnr-container'>
        <div className="dnr-header">
            <div className="dnr-date">
                    {data.date}
            </div>
            <div className="dnr-amount">
                 {"$" + data.amount}
            </div>
        </div>
        <div className='dnr-requestInfo'>
            <div className="rq-item">
                Blood Group: {data.bloodgroup}
            </div>
            <div className="rq-item">
                Hospital:  {data.name}
            </div>
            <div className="rq-item">
                Address: {data.county + " ," + data.state}
            </div>
            <div className="rq-item">
                Contact: {data.phoneNumber}
            </div>
        </div>
        <div className="dnr-bottom">
            <div className="dnrbtm-left">
                
            </div>
            <div className="dnrbtm-right">
                <button className='dnrbtn-decline'>Decline</button>
                <button onClick = {sendEmailConfirmation} className='dnrbtn-accept'>I'll Go</button>
            </div>
           
        </div>
    </div>
  )
}

export default DonationRequest