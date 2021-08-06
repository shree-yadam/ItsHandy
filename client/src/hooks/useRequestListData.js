import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

/**
 * Handles requests data
 */
export default function useRequstListData() {
  const { userId, requestId } = useParams();
  // Id of user who made the requests
  //const clientId = 1;
  //console.log("User id from params in requests list data", userId);
  // State for requests List
  const [requestListState, setRequstListState] = useState(
    {
      requestList: [
        //   {
        //     id: 2,
        //     title: "Broken Fan",
        //     street_address: "111 King Street East",
        //     city: "Toronto",
        //     category_id: 2,
        //     preferred_date: null,
        //     preferred_time: null,
        //     img_url:
        //       "https://c8.alamy.com/comp/WDF2GC/close-up-of-abandoned-floor-fan-WDF2GC.jpg",
        //     description:
        //       "Fan not working. Blades are broken and need someone to replace",
        //     client_id: 1,
        //     provider_id: null,
        //     date_completed: null,
        //     longitude: null,
        //     latitude: null,
        //     price: null,
        //   }
      ],
      offers: [],
    },
    []
  );
  // Gets offers and requests from db
  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3001/api/client/${userId}/requests`),
      axios.get(`http://localhost:3001/api/client/${userId}/requests/offers`),
    ])
      .then((all) => {
        setRequstListState((prev) => {
          return {
            requestList: all[0].data,
            offers: all[1].data,
          };
        });
        // console.log("all[1].data", all[1].data);
      })
      .catch((err) => err.message);
  }, [userId]);

  const assignOffer = (providerId,price) => {
    axios
      .post(
        `http://localhost:3001/api/client/${userId}/requests/${requestId}/offers/assign`
      )
      .then(() =>
        console.log("axios request for assigning offer was successful")
      )
      .catch((err) => console.log(err.message));
  };

  return { requestListState, setRequstListState, assignOffer };
}
