import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import JobDetailsDescription from "./JobDetailsDescription";
import Button from 'react-bootstrap/Button';
import "./JobDetails.scss";
import makeOffer from "../helpers/makeOffer";

export default function JobDetails(props) {
  const [madeOffer, setMadeOffer] = useState(false);
  const [quote, setQuote] = useState();
  const [comment, setComment] = useState();
  console.log(props);
  const location = useLocation();
  const  job = location.state;
  const history = useHistory();


  function handleOffer(){
    makeOffer(props.currentUser.id, job.id, quote, comment)
    .then (() => {
      setMadeOffer(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  console.log(location.state);//TBD : Add comment component

  return (
    <div className="job-details-container">
      <h2>Job Details</h2>
      <div className="details-and-map-container">
        <JobDetailsDescription
        title={job.title}
        description={job.description}
        category={job.category}
        date={job.date}
        img_url={job.img_url}
        />
        <div className="map-container">FOR MAP !!</div>
      </div>
      { !madeOffer &&
      <div className="offer-button">
        <label>Add comments with quote (optional)
          <input className="quote-input" value={comment} onChange={(event)=> setComment(event.target.value)}/></label>
        <label>Quote
          <input className="quote-input" value={quote} onChange={(event)=> setQuote(event.target.value)}/></label>
        <Button className="offer-button"
        onClick={handleOffer}>Make an offer</Button>
      </div>
      }
      { madeOffer &&
      <div className="offer-button">
        <p>Comment: {comment}</p>
        <p>Quote: {quote}</p>
        <Button className="offer-button"
        onClick={() => history.push("/new_listings")}>Back</Button>
      </div>
      }

    </div>
  );
}