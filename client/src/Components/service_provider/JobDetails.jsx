import JobDetailsDescription from "./JobDetailsDescription";
import Button from 'react-bootstrap/Button';
import "./JobDetails.scss";
import makeOffer from "../../helpers/makeOffer";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useEffect, useState } from "react";

export default function JobDetails({
  job,
  currentUser,
  setMode,
  setNewJobs,
  index
}) {
  const [location, setLocation] = useState({ lat: 45.421480, lng: -75.694430 });
  const MapLabelComponent = () => <FontAwesomeIcon icon={faMapPin} size="4x" color="red" />;

  useEffect(() => {
    const locationQueryString = job.street_address.split(' ').join('+') + ',' + job.city.split(' ').join('+');

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationQueryString}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((res) => {
      if(res.data){
        setLocation(res.data.results[0].geometry.location);
      }
    })
    .catch((err) => console.log(err));
  }, []);

  function setComment(comment){
    setNewJobs(prev => {
      const oldList = [...prev];
      oldList[index].offer_comment = comment;
      return oldList;
    });
    job.comment = comment;
  }

  function setQuote(quote){
    setNewJobs(prev => {
      const oldList = [...prev];
      oldList[index].quote = quote;
      return oldList;
    });
    job.quote = quote;
  }

  function handleOffer(){
    makeOffer(currentUser.id, job.id, job.quote, job.comment)
    .then (() => {
      setNewJobs(prev => {
        const oldList = [...prev];
        oldList[index].offer_made = true;
        return oldList;
      });
      job.offer_made = true;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="job-details-main">
      <h2>Job Details</h2>
    <div className="job-details-container">

      <div className="details-and-map-container">
        <JobDetailsDescription
        title={job.title}
        description={job.description}
        category={job.category}
        date={job.preferred_date}
        img_url={job.img_url}
        />
        <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={{lat: 45.421480,
              lng: -75.694430}}
          center={location}
          defaultZoom={14}>
             <MapLabelComponent
            lat={location.lat? location.lat:45.421480}
            lng={location.lng? location.lng:-75.694430}
          />

          </GoogleMapReact>
        </div>
      </div>

      { !job.offer_made &&
      <div className="offer-footer">
      <div className="offer-actions">

        <label>Add comments with quote (optional)
          <input className="quote-input" value={job.offer_comment} onChange={(event)=> setComment(event.target.value)}/></label>

        <label>Quote
        <input className="quote-input" value={job.quote} onChange={(event)=> setQuote(event.target.value)}/></label>

        <Button className="offer-button"
        onClick={handleOffer}>Make an offer</Button>
      </div>
      <Button
      onClick={() => {
        setMode("JOB_LIST");
        }}>Back</Button>
        </div>
      }

      { job.offer_made &&
      <div className="offer-button">

        <p>Quote: {job.quote}</p>
        <Button className="offer-button"
        onClick={() => {
          setMode("JOB_LIST");
          }}>Back</Button>

      </div>
      }

    </div>
    </div>
  );
}