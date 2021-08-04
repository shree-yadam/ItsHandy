
import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../user/UserDashboard';
import { Link } from 'react-router-dom';
import './ProviderDashboard.scss'



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
        <p>First Name:{providerInfo.first_name}</p>
        <p>{providerInfo.last_name}</p>
        <Link to="/assigned_jobs"> Check Out Assigned Jobs</Link>
        <Link to="/new_listings"> Check Out New Listings</Link>
        
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