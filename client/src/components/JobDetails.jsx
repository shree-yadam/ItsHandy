import { useLocation } from "react-router-dom";
import JobDetailsDescription from "./JobDetailsDescription";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "./Button";
import "./JobDetails.scss";

export default function JobDetails(props) {
  const location = useLocation();
  const  {id,
    title,
    description,
    category,
    date,
    img_url
  } = location.state;

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
        <div>{/*For Map*/}</div>
      </div>
      <div className="offer-button">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="offer-quote">Quote</InputGroup.Text>
          <FormControl aria-label="offer-quote" />
        </InputGroup>
        <Button variant="primary" type="submit" className="offer-button">Make an offer</Button>
      </div>

    </div>
  );
}