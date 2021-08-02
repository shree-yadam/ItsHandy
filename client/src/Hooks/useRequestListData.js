import { useState, useEffect } from "react";
import axios from "axios";
/**
 * The first reason for creating this component because state needs to be passed down
 * so we map over it and pass it down to the request list items components
 */
export default function useRequstListData() {
  // Id of user who made the requests
  const id = 1;

  // State for requests List
  const [requestListState, setRequstListState] = useState({
    requestList: [
      {
        id: 2,
        title: "Broken Fan",
        street_address: "111 King Street East",
        city: "Toronto",
        category_id: 2,
        preferred_date: null,
        preferred_time: null,
        img_url:
          "https://c8.alamy.com/comp/WDF2GC/close-up-of-abandoned-floor-fan-WDF2GC.jpg",
        description:
          "Fan not working. Blades are broken and need someone to replace",
        client_id: 1,
        provider_id: null,
        date_completed: null,
        longitude: null,
        latitude: null,
        price: null,
      },
    ]
  });

  // Sets initial request state

  useEffect(() => {
    setRequstListState(
      axios
        .get(`http://localhost:3001/api/requests/${id}`)
        .then((response) =>
          setRequstListState({ requestList: response.data })
        )
        .catch((err) => console.log(err.message))
    );
  }, []);
  return { requestListState, setRequstListState };
}
