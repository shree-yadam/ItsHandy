import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import useRequestListData from "./useRequestListData"
/**
 * Handles requests data
 */
export default function useOfferListData() {
  const { requestListState, setRequestListState } = useRequestListData();

  const { userId, requestId } = useParams();
  // Id of user who made the requests
  //const clientId = 1;
  //console.log("User id from params in requests list data", userId);
  // State for requests List
  const [requestOfferListState, setrequestOfferListState] = useState(
    {
      requestList: [
      ],
      offers: [],
    },
    []
  );

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`http://localhost:3001/api/clients/${userId}/requests`),
  //     axios.get(`http://localhost:3001/api/clients/${userId}/requests/offers`)
  //   ])
  //     .then((all) => {
  //       setRequestListState((prev) => {
  //         return {
  //           requestList: all[0].data,
  //           offers: all[1].data
  //         };
  //       });
  //     })
  //     .catch((err) => err.message);
  // }, [userId]);


  // Assigns offer to a service provider
  const assignOffer = (providerId, price) => {
    //console.log("here");
//    console.log('providerId :>> ', providerId);
  //  console.log(`price`, price)
  //console.log(providerId)
  //console.log(price);
  console.log("assign offer was called")
    axios
      .post(
        `http://localhost:3001/api/clients/${userId}/requests/${requestId}/offers/assign`,
        { provider_id: providerId, price: price }
      )
      .then(() =>
        console.log("axios request for assigning offer was successful")
      )
      .catch((err) => console.log(err.message));
  };

  return { requestOfferListState, setrequestOfferListState, assignOffer };
}
