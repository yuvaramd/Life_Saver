import "./hospitalhome.css"
import React from 'react';
import ReqForm from "../../components/reqForm/ReqForm";

function HospitalHome() {
    return (
        <div className="hh-container" >
            
            <div className="hh-right">
                <ReqForm/>
            </div>
        </div>
    )
}

export default HospitalHome
