
import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../user/UserDashboard';
import { Link } from 'react-router-dom';
import './ProviderDashboard.scss'
import ReviewStars from '../ReviewStars';




export default function ProviderDashboard(
  { currentUser}){
    const [providerInfo, setProviderInfo] = useState();
console.log("THIS IS CURRENT PROVIDER", currentUser)
useEffect(() => {
  axios.get(`/api/providers/${currentUser.id}`)
  .then((res) => {
    if(res.data){
      setProviderInfo(res.data); console.log("this is resdata", res.data)}})
    .catch((err)=>err.message)
},[]);


  return (
    <>
    {providerInfo &&
      
      <div className = "provider-container">
        
        <div className="provder-profile">
        <h1>My Profile</h1>
        <p><img src ={providerInfo.img_url} alt="provider-pic"></img></p>
        <p><strong>My Rating:<ReviewStars rating={providerInfo.avg_rating}/></strong></p>
        <p><strong> Name: </strong>{providerInfo.first_name} {providerInfo.last_name}</p>
        <p><strong>Email: </strong>{providerInfo.email}</p>
        <p><strong>Contact:</strong> {providerInfo.phone_number}</p>
        </div>
        <div className = "provider-grid">
          <div className="provider-grid-1">
        <Link to="/assigned_jobs"> <Button variant="primary"> Your Assigned Jobs </Button></Link>
        </div>
        <div className="provider-grid-2">
        <Link to="/new_listings"> <Button variant="primary"> New Listings </Button>  </Link>
        </div>
        </div>
        
      </div>
      
    }
    {currentUser && !currentUser.is_provider &&
    //TBD:: Display Client Dashboard
      <div>
        <p>{currentUser.id}</p>
        <p>{currentUser.first_name}</p>
      </div>
    }
    </>
  );
};