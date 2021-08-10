
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './ProviderDashboard.scss'
import StarRatings from 'react-star-ratings'





export default function ProviderDashboard(
  { currentUser}){
    const [providerInfo, setProviderInfo] = useState();
    const [providerCategories, setProviderCategories] = useState();
    // console.log("THIS IS CURRENT PROVIDER", currentUser)

    const history = useHistory();
    useEffect(() => {

      //TBD: Temp fix for refresh issues
      if(!currentUser){
        history.push('/login');
        return;
      }
      axios.get(`/api/providers/${currentUser.id}`)
      .then((res) => {
        if(res.data){
          setProviderInfo(res.data[0]);
          setProviderCategories(res.data[1]);
          // console.log("this is resdata", res.data);
        }
      })
      .catch((err)=>err.message);
    },[]);


  return (
    <>
    {providerInfo &&

      <div className = "provider-container">

        <div className="provider-profile">
        <h1>{providerInfo.first_name} {providerInfo.last_name}</h1>
        {providerInfo.img_url !== "" &&
        <img src ={providerInfo.img_url} alt="provider-pic"></img>
        }
        <br></br>
        <p>Rating:</p><StarRatings rating={providerInfo.avg_rating ? providerInfo.avg_rating : 0 } starRatedColor="green"
      numberOfStars={5}/>
      <div className="category-name">
        <br></br>
      <p>Categories:</p> <div id="cat-names">{providerCategories &&

      providerCategories.map((category) => <span key={category.id}>   | {category.category_name} |  </span> )
      }
      </div> 
      </div>
      <br></br>
        <p><strong>Email: </strong>{providerInfo.email}</p>
        <p><strong>Phone Number:</strong> {providerInfo.phone_number}</p>
        </div>
        <div className = "provider-grid">

        {/* <Link to="/assigned_jobs"> <Button variant="primary"> Your Assigned Jobs </Button></Link> */}
        <Link to="/assigned_jobs"> <div className="provider-grid-1">Assigned Jobs </div> </Link>


        <Link to="/new_listings"> <div className="provider-grid-2">New Listings  </div> </Link>

        <Link to="/jobs_completed"> <div className="provider-grid-2">Jobs Completed </div> </Link>
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