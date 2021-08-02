import React, { useState } from "react";
import axios from 'axios';

import RequestListItem from "./RequestListItem";
/**
 * This component renders Requests List for submitted by a specific customer through mapping and using RequstListItem component
 * No props are passed to this function yet (Should take array of requests)
 * @returns single request
 */
const RequestList = (props) => {
  /**
   * Data Sample: List of objects like this
   *   {
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
  }
   */

  // Id of user who made the requests
  const id = 1;

  const requestListResult = axios.get(`http://localhost:3001/api/requests/${id}`)
    .then(result => result.data)
    .catch(err => console.log(err.message))
  //console.log(requestListResult);
  return (
    <div>
      <h1>Requests List</h1>
      
    </div>
  );
};

export default RequestList;
