import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
/**
 * The first reason for creating this component because state needs to be passed down
 * so we map over it and pass it down to the request list items components
 */
export default function useRequstListData() {
  const { userId } = useParams();
  // Id of user who made the requests
  //const clientId = 1;
  console.log("User id from params in requests list data", userId);
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
    },
    []
  );

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3001/api/client/${userId}/requests`),
      axios.get(`http://localhost:3001/api/client/${userId}/requests/offers`),
    ])
      .then((all) => {
        setRequstListState((prev) => {
          return {
            ...prev,
            requestList: all[0].data,
            offers: all[1].data,
          };
        });
        console.log("all[1].data", all[1].data);
      })
      .catch((err) => err.message);
  },[userId]);

  // Sets initial request state
  //   useEffect(() => {
  //     setRequstListState(
  //       axios
  //         .get(`http://localhost:3001/api/requests/${clientId}`)
  //         .then((response) =>
  //           setRequstListState({ requestList: [...response.data] })
  //         )
  //         .catch((err) => console.log(err.message))
  //     );
  //   }, []);
  return { requestListState, setRequstListState };
}
