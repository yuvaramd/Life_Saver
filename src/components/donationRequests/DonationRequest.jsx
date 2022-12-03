import './donationrequest.css'


import { FireSQL } from 'firesql';
import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase.initializeApp({ /* ... */ });
const fireSQL = new FireSQL(firebase.firestore());
const hospGlobalemail="";

function DonationRequest({data}) {
    const emailHospital=""

    const hospdets = fireSQL.query(`
    SELECT email
    FROM hospitals
    WHERE name='YMCA'
    `);
    hospdets.then(hospd=>{
        console.log(hospd.length)
        for (const hos of hospd) {
            console.log("case2",hos.email)
            hospGlobalemail=hos.email
        }
    })
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
                <button className='dnrbtn-accept'>I'll Go</button>            
            </div>
        
        </div>
    </div>
  )
}

// console.log("global - ",hospGlobalemail )
export default DonationRequest