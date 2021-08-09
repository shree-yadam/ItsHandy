import Button from "react-bootstrap/Button";
import makeOffer from "../../helpers/makeOffer";
import "./NewJobListItem.scss";
// import "./NewJobList.scss"

export default function NewJobListItem({
  job,
  currentUser,
  setDetailJobId,
  setMode,
  index,
  setNewJobs,
}) {
  function setQuote(quote) {
    setNewJobs((prev) => {
      const jobs = [...prev];
      jobs[index].quote = quote;
      return jobs;
    });
    job.quote = quote;
  }

  function handleOffer() {
    makeOffer(currentUser.id, job.id, job.quote, "")
      .then(() => {
        setNewJobs((prev) => {
          const jobs = [...prev];
          jobs[index].offer_made = true;
          return jobs;
        });
        job.offer_made = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkMessages() {
    /*TBD */
  }

  // Show listing details component
  function goToDetails(event) {
    console.log("goToDetails");

    setDetailJobId(index);
    setMode("DETAIL");
  }

  return (
    <div className="newlisting-container">
      <div className="newlisting-info">
        <h2>
           <strong>{job.title}</strong>
        </h2>
       <div className="date-offer">
        <p>
          Date needed: {job.preferred_date && job.preferred_date.split("T")[0]}
        </p>
        
        </div>
      </div>
      <div className = "offer-cat-city-container">
   <div className= "newlisting-category-city">
          <p>
          Category: {job.category_name}
        </p>
      <p>City: {job.city}</p>
      </div>
      {job.offer_made && <p className="label-offer-made">You  made an offer!</p>}
      </div>
      {!job.offer_made && (
        <div className = "provider-actions">
          <div className="make-offer">
          <Button className="details-button" type="submit" onClick={goToDetails}>
            Details
          </Button>
            <label>Quote:</label>
            <input
              placeholder="Enter your quote"
              name="quote"
              value={job.quote}
              onChange={(event) => setQuote(event.target.value)}
            />
            <Button
              className="offer-btn"
              variant="success"
              type="submit"
              onClick={handleOffer}
            >
              Make a quick Offer
            </Button>
          </div>
          {/* <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
            Messages
          </Button> */}
          
        </div>
      )}
      {job.offer_made && (
        <div>
          <p>Quote Submitted: {job.quote}</p>
          <Button className="details-button" type="submit" onClick={goToDetails}>
            Details
          </Button>

          {/* <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
            Messages
          </Button> */}
        </div>
      )}
    </div>
  );
}
