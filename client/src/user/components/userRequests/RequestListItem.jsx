import Button from 'react-bootstrap/Button';
import requestlistitem from "./requestlistitem.scss";



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

  const deleteRequest = (event) => {
    event.preventDefault();
    console.log("DELETED REQUEST");

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
          </div>
         
   
        </div>
        </div>
        <div className="listitem-footer">
          <Button className="btn-danger" variant="warning" type="submit" onClick={deleteRequest}>
            Delete
          </Button>
          <Button variant="info">Review And Complete</Button>
          <Button variant="success" type="submit" onClick={sendMessage}>Message</Button>
          {props.OffersRequests.requestOffers && props.OffersRequests.requestOffers.length > 0 && <Button variant="primary" type="button" onClick={() => {
            // <Link
            //   to={{
            //     pathname: "/tylermcginnis",
            //     state: {
            //       "offers": props.OffersRequests.requestOffers,
            //     },
            //   }}
            // >
            //   Tyler McGinnis
            // </Link>
          }}>Show offers</Button>}
        </div>
      </div>
      </div>
  );
}
