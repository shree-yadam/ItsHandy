
import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProviderDashboard.scss'
import StarRatings from 'react-star-ratings'





export default function ProviderDashboard(
  { currentUser}){
    const [providerInfo, setProviderInfo] = useState();
    console.log("THIS IS CURRENT PROVIDER", currentUser)

    useEffect(() => {
      axios.get(`/api/providers/${currentUser.id}`)
      .then((res) => {
        if(res.data){
          setProviderInfo(res.data);
          console.log("this is resdata", res.data);
        }
      })
      .catch((err)=>err.message);
    },[]);


  return (
    <>
    {providerInfo &&

      <div className = "provider-container">

        <div className="provider-profile">
        <h1>My Profile</h1>
        {providerInfo.img_url !== "" &&
        <img src ={providerInfo.img_url} alt="provider-pic"></img>
        }
        <strong>My Rating:</strong><br></br><StarRatings rating={providerInfo.avg_rating ? providerInfo.avg_rating : 0 } starRatedColor="orange"
      numberOfStars={5}/>
        <p><strong> Name: </strong>{providerInfo.first_name} {providerInfo.last_name}</p>
        <p><strong>Email: </strong>{providerInfo.email}</p>
        <p><strong>Contact:</strong> {providerInfo.phone_number}</p>
        </div>
        <div className = "provider-grid">
          
        {/* <Link to="/assigned_jobs"> <Button variant="primary"> Your Assigned Jobs </Button></Link> */}
        <Link to="/assigned_jobs"> <div className="provider-grid-1">Assigned Jobs </div> </Link>
        
        
        <Link to="/new_listings"> <div className="provider-grid-2">New Listings  </div> </Link>
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