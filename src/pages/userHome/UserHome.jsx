import "./userhome.css"
import React from 'react';
import DonationRequest from "../../components/donationRequests/DonationRequest";
import { db } from "../../firebase";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {useState, useEffect} from 'react'
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import { type } from "@testing-library/user-event/dist/type";

function UserHome() {
    const [requests, setRequests] = useState([])
    const [detailedUser, setDetailedUser] = useState({});
    const user = firebase.auth().currentUser;
    const current = new Date();
    const currentLocale = current.toLocaleDateString();
    const currentDate = Date.parse(currentLocale)
  
    

    // const fetchData = async() => {
    //   const res = db.collection('requests');
    //   const data = await res.get();
    //   data.docs.forEach(item => {
    //     setRequests(requests => [...requests, item.data()])
    //   })
      
    // }

    useEffect( async ()=>{
      const res = db.collection('requests');
      const data = await res.get();
      data.docs.forEach(item => {
        setRequests(requests => [...requests, item.data()])
      })
    },[])

    useEffect(async () => {
      const res = db.collection('users');
      const data = await res.get()
      data.docs.forEach(item => {
        const itemData = item.data();
        if(itemData.email === user.email) {
          const userDetailsToAdd = {
            email:itemData.email,
            bloodgroup: itemData.bloodgroup, 
            county: itemData.county, 
            state:itemData.state
          }
          setDetailedUser(userDetailsToAdd)
        }
       
     })
    })

   
    

    return (
        <div className="uh-container" >

        
            <div className="uh-header">
                Welcome Home Donor! 
            </div>
        
            <div className="uh-requestList">
            
            {
               requests.map((r) => {
                if(detailedUser.bloodgroup === r.bloodgroup && detailedUser.county === r.county && detailedUser.state == r.state && r.isAccepted == false && currentDate < Date.parse(r.date)){
                    return <DonationRequest data={r}/>
                }
                
                // return <DonationRequest data={r} />
               })
            }

            
            

            </div>
            
            
        </div>
    )
}

export default UserHome
