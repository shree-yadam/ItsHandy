import React from "react";
import Button from "react-bootstrap/Button";
import "./UserDashboard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UserDashboard({ currentUser }) {
  const [userInfo, setUserInfo] = useState();
  const history = useHistory();
  //console.log(currentUser);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/clients/${currentUser.id}`)
      .then((res) => {
        setUserInfo(res.data);
        //console.log(res.data);
      })
      .catch((err) => err.message);
  }, []);
  return (
    <div className="user-dashboard-container">
     <span className="user-dashboard-button">
                <Button
                  variant="primary"
                  onClick={() => history.push(`/client/${currentUser.id}/requests`)}
                >
                  Current Requests
                </Button>
                <Button
                  variant="primary"
                  onClick={() => history.push(`/client/completed_requests`)}
                >
                  Completed Requests
        </Button>
    </span>
      <div className="user-name-img">
        {userInfo && (
          <div className="user-dashboard-items">
            
            {userInfo.img_url !== "" && <img src={userInfo.img_url} alt="user-pic" />}


            <span>
            <div className="user-dashboard-text">
             Welcome, {userInfo.first_name} {userInfo.last_name} <br></br>
            <strong>Email: </strong> {userInfo.email} <br></br>
            <strong>Contact: </strong>{userInfo.phone_number}
            </div>
            </span>


          </div>

        )}
      </div>

    </div>
  );
}
