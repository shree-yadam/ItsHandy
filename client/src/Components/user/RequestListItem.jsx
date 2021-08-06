import { useHistory, useParams } from 'react-router';

import Button from 'react-bootstrap/Button';
import "./RequestListItem.scss";
import axios from 'axios';



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
        //TBD : UPdate list to reflect the deletion
      })
      .catch((error) => console.log(error));

    // TBD
  };

  const sendMessage = (event) => {
    event.preventDefault();
    console.log("SENT MESSAGE");

    // TBD
  };


//console.log(props.OffersRequests.requestOffers.requestItem && !props.OffersRequests.requestOffers.requestItem.provider_id)
console.log("Line 60",props.OffersRequests.requestOffers , !props.OffersRequests.requestItem.provider_id,  props.OffersRequests.requestOffers.length   )
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

              <p>Date needed: {props.OffersRequests.requestItem.preferred_date && props.OffersRequests.requestItem.preferred_date.slice(0, 10)}</p>

              {/* Displays service provider name if this request was assigned */}
              {props.OffersRequests.requestItem.service_provider_first_name && "Service Provider assigned: " + props.OffersRequests.requestItem.service_provider_first_name + " " + props.OffersRequests.requestItem.service_provider_last_name}
              
              {/* where provider id is null and count is 0 */}
              <p>{props.OffersRequests.requestOffers && props.OffersRequests.requestOffers.length === 0 && "No offers received yet"}</p>

              {/* if offers.length>1 and provider_id is null*/}
              <p>{props.OffersRequests.requestOffers && props.OffersRequests.requestOffers.length > 0 && props.OffersRequests.requestItem && !props.OffersRequests.requestItem.provider_id ? "Number of offers received:" + props.OffersRequests.requestOffers.length :""}</p>


              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="listitem-footer">
          <Button className="btn-danger" variant="warning" type="submit" onClick={deleteRequest}>
            Delete
          </Button>
          {/* Renders Review and Complete button to finish a job and mark it completed if job was already assigned */}
          {props.OffersRequests.requestItem.provider_id !== null ? <Button variant="info">Review And Complete</Button> : ""}

          {/* Check messages regarding an open request */}
          <Button variant="success" type="submit"
            onClick={sendMessage}>
            Message
          </Button>

          {/* Renders show offers button if offers are received and job is not assigned(no service provider id)*/}
          {(props.OffersRequests.requestOffers && !props.OffersRequests.requestItem.provider_id && props.OffersRequests.requestOffers.length > 0 ) &&
            <Button variant="primary" type="button"
              onClick={() => history.push(`requests/${props.OffersRequests.requestItem.id}/offers`, { requestOffer: props.OffersRequests.requestOffers })}>
              Show offers
            </Button>}
        </div>
      </div >
    </div >
  );
}
