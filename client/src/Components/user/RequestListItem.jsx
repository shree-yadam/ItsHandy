import { useHistory, useParams } from 'react-router';

import Button from 'react-bootstrap/Button';
import "./RequestListItem.scss";
import axios from 'axios';
import ReviewStars from '../ReviewStars';



export default function RequestListItem(props) {
  // const title = props.requestItem.title;
  // const description = props.requestItem.description;
  // const street_address
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
  const history = useHistory();


  const deleteRequest = (event) => {
    event.preventDefault();
    console.log("DELETED REQUEST");
    axios.delete(
      `/api/client/${props.currentUser.id}/requests/${props.OffersRequests.requestItem.id}`
    )
      .then((res) => {
        console.log("REQUEST DELETED", res);
        props.setRequestListState(prev => {
          console.log(prev);
          const oldState = {...prev};
          let requestList = [...oldState.requestList];
          requestList = requestList.filter(request => request.id !== props.OffersRequests.requestItem.id);
          oldState.requestList = requestList;
          return oldState;
        })
      })
      .catch((error) => console.log(error));

  };
//submitting rating for stars --> make axios post request
  const submitRating = (event) => {
    event.preventDefault();
    console.log(props)
    console.log("Submit Rating");
    axios.post(
      `/api/client/${props.currentUser.id}/requests/${props.OffersRequests.requestItem.id}/reviews`
    )
      .then((res) => {
        console.log("REVIEW SUBMITTED", res);
        //TBD : Update rating to show rating submitted
      })
      .catch((error) => console.log(error));

    // TBD
  };



  const sendMessage = (event) => {
    event.preventDefault();
    console.log("SENT MESSAGE");

    // TBD
  };

  return (
    <div>


      <div className="listitem-container">

        <div className="info-items">

          <div className="info-text">
            <div className="text-info-header">
              <h2>Title: <strong>{props.OffersRequests.requestItem.title}</strong></h2>
            </div>
            <p>
              <strong>Description:</strong>{props.OffersRequests.requestItem.description}
            </p>
            {/* <p>Description: {props.OffersRequests.requestItem.description}</p> */}
            <p>
              <strong>Street Address:</strong> {props.OffersRequests.requestItem.street_address}
            </p>
            {/* <p>Street Address: {props.OffersRequests.requestItem.street_address}</p> */}

            <p>
              <strong>Category: {props.OffersRequests.requestItem.category_name}</strong>
            </p>
            {/* <p>Category: {props.OffersRequests.requestItem.category_name}</p> */}
            <div className="side-info-header">
              <p>City: {props.OffersRequests.requestItem.city}</p>

              {/* <p>Date needed: {preferred_date}</p> */}
              <p>Date needed: {props.OffersRequests.requestItem.preferred_date && props.OffersRequests.requestItem.preferred_date.slice(0, 10)}</p>
              <p>{props.OffersRequests.requestOffers && props.OffersRequests.requestOffers.length > 0 ? "Number of offers received:" + props.OffersRequests.requestOffers.length : "No offers received"}</p>

              {/* Displays service provider name if this request was assigned */}
              {props.OffersRequests.requestItem.service_provider_first_name && "Service Provider assigned: " + props.OffersRequests.requestItem.service_provider_first_name + " " + props.OffersRequests.requestItem.service_provider_last_name}
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="listitem-footer">
          <Button className="btn-danger" variant="warning" type="submit" onClick={deleteRequest}>
            Delete
          </Button>
          {props.OffersRequests.requestItem.provider_id !== null ? <div><ReviewStars></ReviewStars> <Button variant="info">Review And Complete</Button></div> : ""}
          <Button variant="success" type="submit"
            onClick={sendMessage}>
            Message
          </Button>
          {/* Renders show offers button if offers are received and job is not assigned*/}
          {(props.OffersRequests.requestOffers && !props.OffersRequests.requestItem.date_assigned) && props.OffersRequests.requestOffers.length > 0 &&
            <Button variant="primary" type="button"
              onClick={() => history.push({
                pathname: `requests/${props.OffersRequests.requestItem.id}/offers`,
                state: { requestOffer: props.OffersRequests.requestOffers }
              })}>
              Show offers
            </Button>}
        </div>
      </div >
    </div >
  );
}
