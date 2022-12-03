import "./userhome.css"
import React from 'react';
import DonationRequest from "../../components/donationRequests/DonationRequest";
import { db } from "../../firebase";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {useState, useEffect} from 'react'
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";

function UserHome() {
    const [requests, setRequests] = useState([]);
    const [detailedUser, setDetailedUser] = useState({});
    const [detailedHospital, setDetailedHospital] = useState([]);
    const user = firebase.auth().currentUser;
    const [noRequestFlag, setNoReqFlag] = useState(1)

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

    // query hospital infor from hosp name

    //commenting out 
    // useEffect(async () => {
    //   const res = db.collection('hospitals');
    //   const data = await res.get()
    //   data.docs.forEach(item=>{
    //     setDetailedHospital(requests => [...requests, item.data()])
    //     // console.log("HHHH- ", detailedHospital)
    //   })
    // },[])
    
    // const [detailedHospital, setDetailedHospital] = useState({});    
    // console.log("dataaaaaaaa",detailedHospital.email)

    return (
        <div className="uh-container" >
            <div className="uh-header">
                Welcome Home Donor! 
            </div>
            {
              requests.length
            }
            <div className="uh-requestList">
            {
               requests.map((r) => {
                if(detailedUser.bloodgroup === r.bloodgroup && detailedUser.county === r.county && detailedUser.state == r.state){
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
