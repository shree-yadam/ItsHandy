import  './NewJobListItem.scss';
import StarRatings from 'react-star-ratings';

export default function HistoryListItem({
  job
  }) {


  return (
    <div className="newlisting-container">
      <div className ="newlisting-info">
      <h2>Title: <strong>{job.title}</strong></h2>
      <div className="job-dates">
      <p><strong>Date needed:</strong> {job.preferred_date && job.preferred_date.split('T')[0]}</p>
      <p><strong>Date completed:</strong> {job.date_completed && job.date_completed.split('T')[0]}</p>
      </div>
      </div>

        <div>
          <p><strong>Description:</strong> {job.description}</p>
          <strong>Review given:</strong><br></br><StarRatings rating={job.review } starRatedColor="orange"
          numberOfStars={5}/>

          {/* <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
            Messages
          </Button> */}
        </div>


    </div>
  );
}