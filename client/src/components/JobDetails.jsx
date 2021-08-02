import { useState } from "react";
import { useLocation } from "react-router-dom";
import JobDetailsDescription from "./JobDetailsDescription";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "./Button";
import "./JobDetails.scss";
import { makeOffer } from '../helpers/offerHelper';

export default function JobDetails(props) {
  const [quote, setQuote] = useState();
  const location = useLocation();
  const  {id,
    title,
    description,
    category,
    date,
    img_url
  } = location.state;
  console.log(location.state);
  const comment = ""; //TBD : Add comment component

  return (
    <div className="job-details-container">
      <h2>Job Details</h2>
      <div className="details-and-map-container">
        <JobDetailsDescription
        title={title}
        description={description}
        category={category}
        date={date}
        img_url={img_url}
        />
        <div>FOR MAP !!</div>
      </div>
      <div className="offer-button">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="offer-quote" value={quote} onChange={(event) => setQuote(event.target.value)}>Quote</InputGroup.Text>
          <FormControl aria-label="offer-quote" />
        </InputGroup>
        <Button className="offer-button"
        onClick={() => makeOffer(id,
          props.currentUser.id,
          quote,
          comment)}>Make an offer</Button>
      </div>

    </div>
  );
}