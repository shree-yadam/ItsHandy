import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Handles requests data
 */
export default function useCompletedRequestData(userId) {
  // Id of user who made the requests
  //const clientId = 1;
  //console.log("User id from params in requests list data", userId);
  // State for requests List
  const [completedRequestData, setCompletedRequestData] = useState();
  // Gets offers and requests from db
  useEffect(() => {
      axios.get(`/api/clients/${userId}/requests_completed`)
      .then((result) => {
        console.log("Completed Requests: ", result);
        setCompletedRequestData(result.data);

      })
      .catch((err) => err.message);
  }, [userId]);

  return { completedRequestData, setCompletedRequestData };

}
