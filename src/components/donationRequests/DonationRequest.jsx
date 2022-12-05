import './donationrequest.css'
import axios from 'axios';
import {useStateValue} from "../../StateProvider"
import { useState } from 'react';
import { db } from "../../firebase";


function DonationRequest({data}) {

  const[{basket,user},dispatch] = useStateValue();
  
  const [valid, setValidity] = useState(false)

  const current = new Date();
  const currentLocale = current.toLocaleDateString();
  const currentDate = Date.parse(currentLocale)
  const requestedByDate =  Date.parse(data.date)


//   if(requestedByDate < currentDate){
//         setValidity(false)

//   }

  
  const client = axios.create({
      baseURL:"https://us-central1-lifestream-bde39.cloudfunctions.net/sendEmail"
  })

//   const client = axios.create({
//     baseURL:"http://localhost:5001/lifestream-bde39/us-central1/sendEmail"
//   })

  const  sendEmailConfirmation = () =>{
    client.post('',{
        hospitalEmail:data.email,
        donorEmail:user.email,
        bloodGroup: data.bloodgroup,
        hospitalName: data.name, 
        hospitalPNumber: data.phoneNumber, 
        bloodAmount: data.amount
    })
    .then( async () => {
        var res = db.collectionGroup('requests');
        res.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const docData = doc.data(); 
                if(docData.bloodgroup == data.bloodgroup && docData.county === docData.county && docData.state == data.state && docData.email == data.email, docData.name == data.name){
                   db.collection('requests').doc(doc.id).update({
                    isAccepted: true
                   })
                }
            })
        })

        // const res = db.collection('requests');
        // const dataFromFirebase = await res.get()
        // dataFromFirebase.docs.forEach(item => {
        //     const itemData = item.data();
        //     // console.log(itemData)
        //     //console.log(data.email + data.county + data.state + data.amount + data.name + data.date)
        //     if(itemData.bloodgroup === data.bloodgroup && itemData.county === data.county && itemData.state == data.state && itemData.email == data.email, itemData.name == data.name){
        //         itemData.update({
        //             isAccepted: true
        //         })
        //     }
            
        // })
        alert("Confirmation Sent")
    })
    .catch(err => alert(err) )

    
    
  }
 
  return (
    <div className='dnr-container'>
        <div className="dnr-header">
            <div className="dnr-date">
                {
                    data.date
                }
                   {/* {
                    currentDate > requestedByDate ?  "Invalid" : "Valid"
                   } */}
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
                {/* <button className='dnrbtn-decline'>Decline</button> */}
                <button onClick = {sendEmailConfirmation} className='dnrbtn-accept'>I'll Go</button>
            </div>
           
        </div>
    </div>
  )
}

export default DonationRequest