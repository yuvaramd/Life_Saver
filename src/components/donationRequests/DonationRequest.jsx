import './donationrequest.css'


function DonationRequest({data}) {
 
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

export default DonationRequest