import "./JobDetails.scss";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
export default function JobDetailsDescription({
  title,
  description,
  category,
  street_address,
  city,
  date,
  img_url,
  location,
}) {
  console.log("Category !!", category);
  const MapLabelComponent = () => (
    <FontAwesomeIcon icon={faMapPin} size="4x" color="red" />
  );
  return (
    <div className="job-details-map">
      <div className="job-detail-pic">
        {img_url && (
          <img className="job-detail-img" src={img_url} alt="job details" />
        )}
      </div>
      {/* <div className="detail-map"> */}
      <div className="job-details-text">
        <br />
        <div className="job-deets">
        <h2>{title}</h2>
        
        <span id ="wrapped-desc"> <i> "{description}"</i></span>
        <br></br>

        <span>Job Type: <i> {category}</i></span>
        <span>Preferred Date: <i>{date && date.split("T")[0]} </i></span>
        </div>
        <div>
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={{ lat: 45.42148, lng: -75.69443 }}
          center={location}
          defaultZoom={14}
          >
          <MapLabelComponent
            lat={location.lat ? location.lat : 45.42148}
            lng={location.lng ? location.lng : -75.69443}
            />
        </GoogleMapReact>
      </div>
      <br />
            <p> Address: {street_address + ", " + city}</p>
      </div>
      </div>
    
      </div>
  );
}
