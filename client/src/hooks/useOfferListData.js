import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

/**
 * Handles requests data
 */
export default function useOfferListData() {
  const { userId, requestId } = useParams();
  // Id of user who made the requests
  //const clientId = 1;
  //console.log("User id from params in requests list data", userId);
  // State for requests List
  const [requestListState, setOfferListState] = useState(
    {
      requestList: [
      ],
      offers: [],
    },
    []
  );
  // Gets offers and requests from db
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/client/${userId}/requests/offers`)
      .then(
        (res) =>
          setOfferListState((prev) => {
            return res.data;
          })
        // console.log("all[1].data", all[1].data);
      )
      .catch((err) => err.message);
  }, [userId]);


  // Assigns offer to a service provider
  const assignOffer = (providerId, price) => {
    //console.log("here");
//    console.log('providerId :>> ', providerId);
  //  console.log(`price`, price)
  //console.log(providerId)
  //console.log(price);
    axios
      .post(
        `http://localhost:3001/api/client/${userId}/requests/${requestId}/offers/assign`,
        { provider_id: providerId, price: price }
      )
      .then(() =>
        console.log("axios request for assigning offer was successful")
      )
      .catch((err) => console.log(err.message));
  };

  return { requestListState, setOfferListState, assignOffer };
}
