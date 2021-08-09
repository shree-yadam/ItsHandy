//import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CompletedRequestListItem from "./CompletedRequestListItem";
import useCompletedRequestData from "../../hooks/useCompletedRequestData";
import './RequestList.scss';
import Button from 'react-bootstrap/Button';
import './RequestListItem.scss'
import useVisualMode from "../../hooks/useVisualMode";
import RequestEditForm from "./RequestEditForm";

/**
 * This component renders Requests completed List for a specific customer through
 *
 * @returns single request
 */


const CompletedRequestList = ({currentUser}) => {
  /**
   * Data Sample: List of objects like this
   *   {[
    id: 2,
    title: 'Broken Fan',
    street_address: '111 King Street East',
    city: 'Toronto',
    category_id: 2,
    preferred_date: null,
    preferred_time: null,
    img_url: 'https://c8.alamy.com/comp/WDF2GC/close-up-of-abandoned-floor-fan-WDF2GC.jpg',
    description: 'Fan not working. Blades are broken and need someone to replace',
    client_id: 1,
    provider_id: null,
    date_completed: null,
    longitude: null,
    latitude: null,
    price: null
  }]
   */
  // useEffect(() => {
  //   if(!currentUser){
  //     history.push('/login');
  //     return;
  //   }

  // }, []);

  const { completedRequestData } = useCompletedRequestData(currentUser && currentUser.id);
  const history = useHistory();


  return (<div className="request-list">
      <div>
          <h1>Requests Completed</h1>
        {(!completedRequestData ) && <h3>Loading ...</h3>}
        {completedRequestData && completedRequestData.map(completedRequestItem =>
            <CompletedRequestListItem key={completedRequestItem.id} request={completedRequestItem} />

        )
        }</div>
  </div>
  )
};

export default CompletedRequestList;
