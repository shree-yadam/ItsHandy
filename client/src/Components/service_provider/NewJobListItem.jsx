import Button from 'react-bootstrap/Button';
import makeOffer from '../../helpers/makeOffer'
import  './NewJobListItem.scss';

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
    <div className="newlisting-container">
      <div className ="newlisting-info">
      <h2>Title: <strong>{job.title}</strong></h2>
      <p>Date needed: {job.date && job.date.split('T')[0]}</p>
      </div>

      { !job.offer_made &&
        <div>
          <div className="make-offer">
          <label>Quote: </label>
          <input placeholder="Enter your quote" name="quote" value={job.quote} onChange={(event) => setQuote(event.target.value)} />
          <Button className="offer-btn" variant="success" type="submit"  onClick={handleOffer} >
            Make a quick Offer
          </Button>
          </div>
          <Button  variant="primary" type="submit"  onClick={goToDetails}>
            Details
          </Button>
          <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
            Messages
      </Button>
        </div>
      }
      { job.offer_made &&
      <div>
        <p>Quote: {job.quote}</p>
        <Button  variant="primary" type="submit"  onClick={goToDetails}>
            Details
          </Button>

          <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
          Messages
    </Button>
    </div>
      }

    </div>
  );
}