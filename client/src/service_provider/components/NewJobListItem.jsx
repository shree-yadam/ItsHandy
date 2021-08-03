import Button from 'react-bootstrap/Button';
import makeOffer from '../helpers/makeOffer'

export default function NewJobListItem({
  job,
  currentUser,
  setDetailJobId,
  setMode,
  index,
  setNewJobs
  }) {
  function setQuote(quote) {
    setNewJobs(prev => {
      const jobs = [...prev];
      jobs[index].quote = quote;
      return jobs;
    });
    job.quote = quote;
  }

  function handleOffer(){
    makeOffer(currentUser.id, job.id, job.quote, "")
    .then (() => {
      setNewJobs(prev => {
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

  function checkMessages(){
    /*TBD */
  }

  // Show listing details component
  function goToDetails(event) {
    console.log("goToDetails");

    setDetailJobId(index);
    setMode("DETAIL");

  }

  return (
    <div>
      <h2>Title: <strong>{job.title}</strong></h2>
      <p>Date needed: {job.date && job.date.split('T')[0]}</p>


      { !job.offer_made &&
        <div>
          <label>Quote:</label>
          <input name="quote" value={job.quote} onChange={(event) => setQuote(event.target.value)} />
          <Button variant="primary" type="submit"  onClick={handleOffer} >
            Make a quick Offer
          </Button>
          <Button variant="primary" type="submit"  onClick={goToDetails}>
            Details
          </Button>
        </div>
      }
      { job.offer_made &&
      <div className="offer-button">
        <p>Quote: {job.quote}</p>
      </div>
      }
      <Button variant="primary" type="submit"  onClick={checkMessages}>
            Messages
      </Button>
    </div>
  );
}