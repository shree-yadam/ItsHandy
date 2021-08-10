// import { useHistory, useParams } from "react-router";
// import useVisualMode from "../../hooks/useVisualMode";
import StarRatings from 'react-star-ratings';
// import Button from "react-bootstrap/Button";
import "./CompletedRequestListItem.scss";

// const REQUEST_LIST = "REQUEST_LIST";
// const EDIT_REQUEST = "EDIT_REQUEST";

export default function CompletedRequestListItem({request}) {
  // const history = useHistory();

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   console.log("SENT MESSAGE");

  //   // TBD
  // };


  //console.log(props.OffersRequests.requestOffers.requestItem && !props.OffersRequests.requestOffers.requestItem.provider_id)
  //console.log("Line 60", props.OffersRequests.requestOffers, !props.OffersRequests.requestItem.provider_id, props.OffersRequests.requestOffers.length)
  return (


    <div>
      <div className="completed-container">
      <div className="completed-header">
              <h2>
                 <strong>{request.title}</strong>
              </h2>

              <p>
                {/* <p>Description: {props.OffersRequests.requestItem.description}</p> */}
                <strong></strong>
                {request.description}
              </p>
              </div>
        <div className="completed-items">
          

              <div className="completed-text">
              <p>
                {/* <p>Street Address: {props.OffersRequests.requestItem.street_address}</p> */}
                <strong>Address:</strong>{" "}
                {request.street_address}
              </p>
              <p>
                <strong>City:</strong> {request.city}
              </p>

              <p>
                {/* <p>Category: {props.OffersRequests.requestItem.category_name}</p> */}
                <strong>Category:</strong>{" "}
                {request.category_name}
              </p>

              {request.preferred_date &&
                <p> <strong>Date Needed: </strong> {request.preferred_date.slice(0, 10)}</p>
                }
                {request.date_completed && <p> <strong>Date Completed: </strong>{request.date_completed.slice(0, 10)}</p>
                }

            </div>

            <div className="completed-side-info-header">
              {/* where provider id is null and count is 0 */}
              <p><strong>Service Provider: </strong> {request.service_provider_first_name + " " + request.service_provider_last_name}</p>
            </div>
          </div>
       

        <div className="completed-listitem-footer">
        <strong>Review given:</strong><br></br><StarRatings rating={request.review || 0} starRatedColor="orange"
          numberOfStars={5}/>{" "}
              {/* <Button variant="info" onClick={submitRating}>
                Review And Complete
              </Button> */}


          {/*(props.OffersRequests.requestItem.provider_id !== null ||props.OffersRequests.requestOffers.length > 0) &&
            <Button variant="success" type="submit" onClick={sendMessage}>
              Message
            </Button>
          */}

        </div>
      </div>
    </div>
  );
}
