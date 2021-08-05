import React from 'react';
import Button from 'react-bootstrap/Button';
import './UserDashboard.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function UserDashboard({currentUser}) {
const [userInfo, setUserInfo] = useState();
console.log(currentUser)
useEffect(() => {
  axios.get(`http://localhost:3001/api/clients/${currentUser.id}`)
  .then((res) => {
      setUserInfo(res.data); console.log(res.data)})
    .catch((err)=>err.message)
},[]);
  return (

    <div className="user-dashboard-container">

        <div className="user-name-img">
      { userInfo &&
      <div className="user-dashboard-items">
First Name: {userInfo.first_name} <br></br>
Last Name: {userInfo.last_name} <br></br>
Email: {userInfo.email} <br></br>
Image:<img src={userInfo.img_url} alt="user-pic" /> <br></br>
Contact: {userInfo.phone_number} <br></br>
</div>

      }
</div>
<span>
<Button  variant="primary"className="navbar-items" onClick={()=>console.log(currentUser.currentUser)}>test</Button>

</span>
      </div>



  )


}
