//import React, { useState, useEffect } from "react";
//import axios from 'axios';

import RequestListItem from "./RequestListItem";
import useRequestListData from "../../Hooks/useRequestListData.js";
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
  const { requestListState, setRequstListState } = useRequestListData();




  // const requestsList = requestListState.requestList.map(requestItem => {
  //   return (
  //     <RequestListItem {...requestItem} />
  //   )
  // })
  return (<div>
    {/* {requestsList} */}
  </div>)
};

export default RequestList;
