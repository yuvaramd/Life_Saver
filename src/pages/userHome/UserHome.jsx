import "./userhome.css"
import React from 'react';
import DonationRequest from "../../components/donationRequests/DonationRequest";
import { db } from "../../firebase";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {useState, useEffect} from 'react'
import { useStateValue } from "../../StateProvider";

function UserHome() {
    const [requests, setRequests] = useState([])
    const [detailedUser, setDetailedUser] = useState({});
    const[{basket,user},dispatch] = useStateValue();

    const fetchData = async() => {
      const res = db.collection('requests');
      const data = await res.get();
      data.docs.forEach(item => {
        setRequests(requests => [...requests, item.data()])
      })
    }

    const fetchDetailedUser = async() =>{
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
      
    }
    
    useEffect(()=>{
      fetchDetailedUser();
    },user.email)

    useEffect (() => {
      fetchData();
    },[])


  
  
    return (
        <div className="uh-container" >
            <div className="uh-header">
                Welcome Home Donor! 
            </div>
            <div className="uh-requestList">
            {
               requests.map((r) => {
                if(detailedUser.bloodgroup === r.bloodgroup && detailedUser.county === r.county && detailedUser.state == r.state){
                    return <DonationRequest data={r}/>
                }
               })
            }

            

            </div>
            
            
        </div>
    )
}

export default UserHome
