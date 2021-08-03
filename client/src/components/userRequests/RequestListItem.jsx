import Button from 'react-bootstrap/Button';
import requestlistitem from "./requestlistitem.scss";

export default function RequestListItem({
  title,
  street_address,
  city,
  preferred_date,
  category_id,
  description,
  category,
  date,
}) {
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
        {/* <RequestItemInfo ></RequestItemInfo> */}
<div className="info-items">
        <div className="info-text">
          <div className="text-info-header">
            <h2>
              Title: <strong>{title}</strong>
            </h2>
          </div>
          <p>
            <strong>Street Address:</strong> {street_address}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Category: {category}</strong>
          </p>
        </div>
        

        <div className="side-info-header">
          <p>Date needed: {preferred_date}</p>
          <p>City: {city}</p>
        </div>
        </div>
        <div className="listitem-footer">
          <Button className="btn-danger" variant="warning" type="submit" onClick={deleteRequest}>
            Delete
          </Button>
          <Button variant="info">Review And Complete</Button>
          <Button variant="success" type="submit" onClick={sendMessage}>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
